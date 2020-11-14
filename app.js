const path = require("path");
const express = require("express");
const userRouter = require("./server/routes/user");
const globalErrorHandler = require("./server/controllers/error");

const app = express();

//Parse request Body
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
// app.use(cookieParser());

// Serving static files
app.use(express.static(path.join(__dirname, "client/build")));

app.use("/api/v1/users", userRouter);

app.use(globalErrorHandler);

module.exports = app;
