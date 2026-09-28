const { randomUUID } = require("node:crypto");

const messages = [
  {
    id: randomUUID(),
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    id: randomUUID(),
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

module.exports = messages;
