//Websocekt variables

// const url = "wss://pullout-the-sword.glitch.me";
const url = "ws://localhost:3000";
var socket = new WebSocket(url);

// var countText = document.getElementById('count'); from index.js

//Sending message from client
function sendMsg(count) {
    socket.send(count);
}

//Creating DOM element to show received messages on browser page
function msgGeneration(goal) {
    if (goal > 500) {
        countText.style.color = "white";
        countText.textContent = goal;
    }
    if (goal < 500) {
        countText.style.color = "yellow";
        countText.textContent = goal;
    }
    if (goal < 200) {
        countText.style.color = "orange";
        countText.textContent = goal;
    }
    if (goal < 100) {
        countText.style.color = "red";
        countText.textContent = goal;
    }
    if (goal == 0) {
        countText.style.color = "red";
        countText.textContent = "HaHaHa... you thought you could pull me out? Try again!";;
    }
}


//handling message event
socket.onmessage = function(event) {
    msgGeneration(event.data)
}

socket.onclose = () => {
    socket = new WebSocket(url);
}