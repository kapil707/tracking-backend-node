//const http = require('http');
const express = require('express');

const {logReqRes} = require("./middlewares");
const userRouter = require('./routes/main');

const app = express();
const PORT = 8000;

//Middleware - plugin
app.use(express.urlencoded({extended:false}));

app.use(logReqRes("log.txt"));

app.use("/users",userRouter);

app.listen(PORT, () => console.log("server start " + PORT));

// const myServer = http.createServer(app);

// myServer.listen(8000, () => console.log("server start 8000"));