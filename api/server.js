const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const server = express();
server.use(cors());
const authRouter = require("./auth/auth-router");
const itemsRouter = require("./items/items-router");

const usersRouter = require("./users/users-router");
server.use(express.json());

server.use("/api/users", usersRouter);
server.use("/api/auth", authRouter);
server.use("/api/items", itemsRouter);

server.use(helmet());

module.exports = server;
