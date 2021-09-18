const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const server = express();
server.use(cors());
const authRouter = require("./auth/auth-router");

const usersRouter = require("./users/users-router");
server.use(express.json());
server.use("/", (req, res) => {
  res.send("Hello");
});
server.use("/api/users", usersRouter);
server.use("/api/auth", authRouter);

server.use(helmet());

module.exports = server;
