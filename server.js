const WebSocket = require("ws");
const express = require("express");
const app = express()
const path = require("path");

var goal = 1000000000000000;

app.use("/",express.static(path.resolve(__dirname, "./public")));

const myServer = app.listen(3000);       // regular http server using node express which serves your webpage

const wsServer = new WebSocket.Server({
    server: myServer                    // no need to create a new server
})                                      // a websocket server

wsServer.on("connection", function(ws) {    // what should a websocket do on connection
    ws.send(goal);
  
  ws.on("message", function(msg) {
        goal -= msg;
      
        wsServer.clients.forEach(function each(client) {
            if (client.readyState === WebSocket.OPEN) {  
                client.send(goal)
              
            }
        })
    });
})

// myServer.on('upgrade', async function upgrade(request, socket, head) {      //handling upgrade(http to websocekt) event
    
//     //emit connection when request accepted
//     wsServer.handleUpgrade(request, socket, head, function done(ws) {
//       wsServer.emit('connection', ws, request);
//     });
// });