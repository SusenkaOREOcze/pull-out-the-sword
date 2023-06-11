const maiMenu = document.getElementById('mainContainer');
var background = new Audio('./sfx/background.mp3');
background.volume = 0.2;

var isClicked;

maiMenu.addEventListener('click', () => {
    maiMenu.style.display = 'none';
    background.play();

    isClicked = false;
    playRepeat();
});

async function playRepeat() {

    await sleep(550);
    background.play();
    playRepeat();
    
}