const maiMenu = document.getElementById('mainContainer');
// var background = new Audio('./sfx/background.mp3');
var background = new Audio('https://cdn.glitch.global/05b7e626-0da6-478e-9295-aac1bc66326f/Gerudo%20Valley.mp3?v=1686505319108')
background.volume = 0.2;

var isClicked;

maiMenu.addEventListener('click', () => {
    maiMenu.style.display = 'none';
    background.play();

    isClicked = false;
    playRepeat();
});

async function playRepeat() {

    await sleep(0);
    background.play();
    playRepeat();
    
}