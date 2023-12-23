# kafka-cluster-sasl

bin/kafka-topics.sh --create --topic organization_data --partitions 1 --replication-factor 1 --config retention.ms=1000 --config retention.bytes=1 --zookeeper localhost:2181 --config log.segment.bytes=100

kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic organization_data --from-beginning --property auto.offset.reset=latest
