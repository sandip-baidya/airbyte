#
# Copyright (c) 2022 Airbyte, Inc., all rights reserved.
#


from typing import Any, Iterable, Mapping

from airbyte_cdk import AirbyteLogger
import logging
from airbyte_cdk.destinations import Destination
from airbyte_cdk.models import AirbyteConnectionStatus, AirbyteMessage, ConfiguredAirbyteCatalog, Status, Type

from .client import Client


def get_schema(configured_catalog: ConfiguredAirbyteCatalog) -> Mapping[str, Mapping[str, str]]:
    schema = {}
    for stream in configured_catalog.streams:
        stream_schema = {}
        for k, v in stream.stream.json_schema.get("properties").items():
            stream_schema[k] = "default"
            if "array" in v.get("type", []) and "object" in v.get("items", {}).get("type", []):
                stream_schema[k] = "jsonify"
            if "object" in v.get("type", []):
                stream_schema[k] = "jsonify"
        schema[stream.stream.name] = stream_schema
    return schema


class DestinationWeaviate(Destination):
    def write(
        self, config: Mapping[str, Any], configured_catalog: ConfiguredAirbyteCatalog, input_messages: Iterable[AirbyteMessage]
    ) -> Iterable[AirbyteMessage]:

        """
        TODO
        Reads the input stream of messages, config, and catalog to write data to the destination.

        This method returns an iterable (typically a generator of AirbyteMessages via yield) containing state messages received
        in the input message stream. Outputting a state message means that every AirbyteRecordMessage which came before it has been
        successfully persisted to the destination. This is used to ensure fault tolerance in the case that a sync fails before fully completing,
        then the source is given the last state message output from this method as the starting point of the next sync.

        :param config: dict of JSON configuration matching the configuration declared in spec.json
        :param configured_catalog: The Configured Catalog describing the schema of the data being received and how it should be persisted in the
                                    destination
        :param input_messages: The stream of input messages received from the source
        :return: Iterable of AirbyteStateMessages wrapped in AirbyteMessage structs
        """
        client = Client(config, get_schema(configured_catalog))
        # TODO add support for overwrite mode
        # for configured_stream in configured_catalog.streams:
        #    if configured_stream.destination_sync_mode == DestinationSyncMode.overwrite:
        #        client.delete_stream_entries(configured_stream.stream.name)

        for message in input_messages:
            if message.type == Type.STATE:
                # Emitting a state message indicates that all records which came before it have been written to the destination. So we flush
                # the queue to ensure writes happen, then output the state message to indicate it's safe to checkpoint state
                client.flush()
                yield message
            elif message.type == Type.RECORD:
                record = message.record
                client.queue_write_operation(record.stream, record.data)
            else:
                # ignore other message types for now
                continue

        # Make sure to flush any records still in the queue
        client.flush()

    def check(self, logger: AirbyteLogger, config: Mapping[str, Any]) -> AirbyteConnectionStatus:
        """
        Tests if the input configuration can be used to successfully connect to the destination with the needed permissions
            e.g: if a provided API token or password can be used to connect and write to the destination.

        :param logger: Logging object to display debug/info/error to the logs
            (logs will not be accessible via airbyte UI if they are not passed to this logger)
        :param config: Json object containing the configuration of this destination, content of this json is as specified in
        the properties of the spec.json file

        :return: AirbyteConnectionStatus indicating a Success or Failure
        """
        try:
            client = Client.get_weaviate_client(config)
            ready = client.is_ready()
            if not ready:
                return AirbyteConnectionStatus(status=Status.FAILED, message=f"Weaviate server {config.get('url')} not ready")
            return AirbyteConnectionStatus(status=Status.SUCCEEDED)
        except Exception as e:
            return AirbyteConnectionStatus(status=Status.FAILED, message=f"An exception occurred: {repr(e)}")