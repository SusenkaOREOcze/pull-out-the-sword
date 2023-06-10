const WebSocket = require("ws");
const express = require("express");
const path = require("path");
require('dotenv').config()

// set variables for data
var goal = Number(process.env.GOAL);

// set up express server
const app = express()
app.use("/",express.static(path.resolve(__dirname, "./public")));

const server = app.listen(process.env.PORT, () => {
    console.log("Server started on port " + process.env.ROUTE + ":" + process.env.PORT);
});

// set up websocket server
const wsServer = new WebSocket.Server({
    server: server
})

// handle websocket events
wsServer.on("connection", function(ws) {
    ws.send(goal);

    ws.on("message", function(msg) {
        goal -= msg;

        // for each client connected to the server
        wsServer.clients.forEach(function each(client) {
            if (client.readyState === WebSocket.OPEN) {  
                client.send(goal);
            };
        });
    });
});