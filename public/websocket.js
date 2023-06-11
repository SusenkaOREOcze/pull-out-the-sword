//Websocekt variables

// const url = "wss://pullout-the-sword.glitch.me";
const url = "ws://localhost:3000";
var socket = new WebSocket(url);

// var countText = document.getElementById('count'); from index.js

//Sending message from client
function sendMsg(type, count) {
    socket.send(
        JSON.stringify({
            type: type,
            count: count
        })
    );
};

//Creating DOM element to show received messages on browser page
async function msgGeneration(data) {

    if (data.goal > 500) {
        countText.style.color = "white";
        countText.textContent = data.goal;
    }

    if (data.goal < 500) {
        countText.style.color = "yellow";
        countText.textContent = data.goal;
    };

    if (data.goal < 200) {
        countText.style.color = "orange";
        countText.textContent = data.goal;
    };

    if (data.goal < 100) {
        countText.style.color = "red";
        countText.textContent = data.goal;
    };

    if (data.goal == 0) {
        if ((55 < data.chance) && (data.chance < 75)) {
            countText.style.color = "green";
            countText.textContent = "You got lucky this time!";
            await sleep(2000);
            sendMsg("reset", null);
        } else {
            countText.style.color = "red";
            countText.textContent = "HaHaHa... you thought you could pull me out? Try again!";;
            abortMoveSwordInput = true;
        };
    };
};


//handling message event
socket.onmessage = function(event) {
    msgGeneration(JSON.parse(event.data));
};