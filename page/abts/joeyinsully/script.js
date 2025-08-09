// Variables
var click_audio = new Audio('https://editanemilis.github.io/assets/audio/click.wav');

/// Links
// Return
function Return() {
    window.open("https://editanemilis.github.io/page/index.html");
    console.log("Going back..");

    click_audio.play();
}