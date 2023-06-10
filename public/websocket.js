//Websocekt variables
const url = "wss://pullout-the-sword.glitch.me";
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

socket.onclose = () => {
  const socket = new WebSocket(url);
}