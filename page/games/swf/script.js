// Variables
var click_audio = new Audio('https://editanemilis.github.io/assets/audio/click.wav');

/// Links
// Return
function Return() {
    window.open("https://editanemilis.github.io/page/index.html");
    console.log("Going back..");

    click_audio.play();
}

/// Buttons
// Play SWF
function SWFGame() {
    window.open("https://editanemilis.github.io/assets/swf/QuickMouseSWF.swf");
    console.log("Playing the SWF file..");

    click_audio.play();
}

// itch.io ALT
function ItchIO() {
    window.open("https://editagaming.itch.io/quick-mouse-test");
    console.log("Moving to itch.io..");

    click_audio.play();
}

// MFA Download
function MFA(url, name) {
    var link = document.createElement("a");
    link.download = name;

    url = ("https://editanemilis.github.io/assets/swf/QuickMouseSWF.mfa");
    link.href = url;
    link.click();
    console.log("Downloading MFA file..");

    click_audio.play();
}