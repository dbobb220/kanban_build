const express = require("express");
const dotenv = require("dotenv");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const authMiddleWare = require("./authentication").authentication;
const tasksRoutes = require("./tasks/TaskRoutes");
const usersRoutes = require("./users/UserRoutes");
const sessionRoutes = require("../session/SessionRoute");

dotenv.config();

mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@aca-practice-bx4sb.mongodb.net/${process.env.DB_DB}?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log(`Database connected`);
});

if (process.env.NODE_ENV === "production") {
  // Exprees will serve up production assets
  app.use(express.static(path.join(__dirname, "public")));

  // Express serve up index.html file if it doesn't recognize route
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "public"));
  });
} else {
  app.use(express.static(path.join(__dirname, "public")));
}

app.use(bodyParser.json());
app.use(express.static("public"));
app.use(usersRoutes);
app.use(sessionRoutes);
app.use(tasksRoutes);

app.get("/ping", function(req, res) {
  return res.send("pong");
});

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(process.env.PORT || port, () =>
  console.log(`Server listening on port ${port}!`)
);
