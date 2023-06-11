const WebSocket = require("ws");
const express = require("express");
const path = require("path");
require('dotenv').config()


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

// initialize variables

// data to send to client
var goalData = {
    goal: Number(process.env.GOAL),
    chance: null
}

// handle websocket events
wsServer.on("connection", function(ws) {

    // send initial data to client
    ws.send(JSON.stringify(goalData));

    // handle messages from client
    ws.on("message", function(msg) {

        let data = JSON.parse(msg);

        // reset the counter
        if (data.type == "reset") {
            goalData.goal = process.env.GOAL;
        };

        // update count
        if (!((goalData.goal - data.count) < 0)) {
            if(data.type == "click") {
                goalData.goal -= data.count;
            }
        };

        // for each client connected to the server
        wsServer.clients.forEach(function each(client) {  
            
            // send the data to the client if not 0
            if (goalData.goal !== 0) {
                client.send(JSON.stringify(goalData));
            } else {
                // generate a random number between 1 and 100
                goalData.chance = Math.floor(Math.random() * 100) + 1;
    
                // if the goal is 0, send a message to the client
                client.send(JSON.stringify(goalData));
            }

        });
    });
});