// Variables
var click_audio = new Audio('assets/audio/click.wav');

/// Links
// Odysee
function OdyseeLink() {
    window.open("https://odysee.com/@ramanauskiene.edita:4");
    console.log("..Odysee..")

    click_audio.play();
}
// Vidlii
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
/// Games
// SLSG
function SLSG() {
    window.open("https://www.roblox.com/games/11629837251/Simple-LUA-Showcase-Game");
    console.log("..Simple LUA Showcase Game..")

    click_audio.play();
}
// ONaTI
function ONaTI() {
    window.open("https://editagaming.itch.io/onati");
    console.log("..One NIGHT at Treasure Island, half-baked..")

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
// Furaffinity Finest Death Threats
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