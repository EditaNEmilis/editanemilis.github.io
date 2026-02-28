// Variables
var click_audio = new Audio('https://editanemilis.github.io/assets/audio/click.wav');

/// Links
// Page Section
function PageSection() {
    window.open("https://editanemilis.github.io/page/index.html");
    console.log("..Page Section..")

    click_audio.play();
}

// Odysee
function OdyseeLink() {
    window.open("https://odysee.com/@ramanauskiene.edita:4");
    console.log("..Odysee..")

    click_audio.play();
}

// VidLii
function VidLiiLink() {
    window.open("https://vidlii.com/user/ramanauskieneedita");
    console.log("..VidLii..")

    click_audio.play();
}

// Rumble
function RumbleLink() {
    window.open("https://rumble.com/c/c-5907867");
    console.log("..Rumble..")

    click_audio.play();
}

// Discord
function DiscordLink() {
    window.open("https://discord.gg/nbD4gPN2RA")
    console.log("..Discord..")

    click_audio.play();
}

/// TXTs
// Furaffinity Finest Death Threats
function FFDT1(url, name) {
    var link = document.createElement("a");
    link.download = name;

    url = "assets/txts/FuraffinityFinestDeathThreats.txt"
    link.href = url;
    link.click();
    console.log("..Furaffinity Finest Death Threats, trollish..")

    click_audio.play();
}

// Furaffinity Finest Death Threats (Calm)
function FFDT2(url, name) {
    var link = document.createElement("a");
    link.download = name;

    url = "assets/txts/FuraffinityFinestDeathThreatsCalm.txt"
    link.href = url;
    link.click();
    console.log("..Furaffinity Finest Death Threats, trollish but calm..")

    click_audio.play();
}
///