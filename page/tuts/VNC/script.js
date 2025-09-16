// Variables
var click_audio = new Audio('https://editanemilis.github.io/assets/audio/click.wav');

/// Links
// Return
function Return() {
    window.open("https://editanemilis.github.io/page/index.html");
    console.log("Going back..");

    click_audio.play();
}

/// Functions
// Red Text Blinker
setInterval(() => {
    const h1 = document.querySelector('.Intro h1');
    if (h1) {
        h1.style.opacity = h1.style.opacity === '0' ? '1' : '0';
    }
}, 1000);