const express = require("express");
const path = require("node:path");
const messages = require("./views/messages");
const { randomUUID } = require("node:crypto");

const app = express();

const PORT = process.env.PORT || 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index", { messages });
});

app.get("/new", (req, res) => {
  res.render("form");
});

app.post("/new", (req, res) => {
  const { user, text } = req.body;

  messages.push({
    id: randomUUID(),
    user,
    text,
    added: new Date(),
  });

  res.redirect("/");
});

app.get("/messages/:id", (req, res) => {
  const message = messages.find((message) => message.id === req.params.id);

  if (!message) {
    return res.status(404).send("No message found");
  }

  res.render("message", { message });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
