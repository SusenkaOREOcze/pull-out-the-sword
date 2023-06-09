//Websocekt variables
const url = "ws://localhost:9876";
const socket = new WebSocket(url);


//Sending message from client
function sendMsg(count) {
    socket.send(count);
}

//Creating DOM element to show received messages on browser page
function msgGeneration(goal) {
    let countText = document.getElementById('count');
    countText.textContent = goal;
}


//handling message event
socket.onmessage = function(event) {
    msgGeneration(event.data)
}