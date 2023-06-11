const sword = document.getElementById('sword');
let countText = document.getElementById('count');

var isClicked = false;

sword.onclick = moveSword;

async function moveSword() {
    if (isClicked) {
        return;
    } else {
        isClicked = true;
        sword.onclick = null;

        sword.style.transform = 'rotate(1deg)';

        await sleep(270);
        sword.style.transform = 'rotate(-1deg)';

        await sleep(270);
        sword.style.transform = 'rotate(0deg)';

        sendMsg("click", 1);

        isClicked = false;
        sword.onclick = moveSword;
        return;
    }
}

function sleep(ms) {
return new Promise(resolve => setTimeout(resolve, ms));
}
