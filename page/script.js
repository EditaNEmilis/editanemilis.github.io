// Variables
var click_audio = new Audio('../assets/audio/click.wav');

/// Links
// Return
function Return() {
    window.open("https://editanemilis.github.io/");
    console.log("Going back..")

    click_audio.play();
}
// Games
// SWF
function SWFGame() {
    window.open("https://editanemilis.github.io/page/games/swf/index.html");
    console.log("SWF game time..")

    click_audio.play();
}
// Furaffinity
function FA() {
    window.open("https://editanemilis.github.io/page/tuts/Furaffinity/index.html");
    console.log("Trollish time..")

    click_audio.play();
}