const sword = document.getElementById('sword');
let countText = document.getElementById('count');

countText.textContent = 1000000000000000;

var isClicked = false;

sword.onclick = moveSword;

async function moveSword() {
if (isClicked) {
    return;
} else {
    isClicked = true;
    sword.onclick = null;

    sword.style.transform = 'rotate(181deg)';

    await sleep(250);
    sword.style.transform = 'rotate(179deg)';

    await sleep(250);
    sword.style.transform = 'rotate(180deg)';

    sendMsg(1);

    isClicked = false;
    sword.onclick = moveSword;
    return;
}
}

function sleep(ms) {
return new Promise(resolve => setTimeout(resolve, ms));
}
