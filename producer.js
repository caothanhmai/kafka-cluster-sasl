const kafka = require("kafka-node");

const saslConfig = {
  mechanism: "plain",
  username: "admin",
  password: "admin-secret",
};

const user = new kafka.KafkaClient({
  kafkaHost: "localhost:9092",
  sasl: saslConfig,
});

const producer = new kafka.Producer(user);

producer.on("ready", () => {
  const payload = [
    {
      topic: "testing",
      messages: "OK",
    },
  ];

  producer.send(payload, (error, data) => {
    if (error) {
      console.error("Error in publishing message:", error);
    } else {
      console.log("Message successfully published:", data);
    }
  });
});

producer.on("error", (error) => {
  console.error("Error connecting to Kafka:", error);
});
