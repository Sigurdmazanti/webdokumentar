/* Navigationsbar */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

/* Video */
document.addEventListener("DOMContentLoaded", function () { startplayer(); }, false);
var player;

function startplayer() {
    player = document.getElementById('video_player');
    player.controls = false;
}
function play_vid() {
    player.play();
}
function pause_vid() {
    player.pause();
}
function stop_vid() {
    player.pause();
    player.currentTime = 0;
}
function change_vol() {
    player.volume = document.getElementById("change_vol").value;
}

// Uge-array
let enUge = [
    "Søndag",
    "Mandag",
    "Tirsdag",
    "Onsdag",
    "Torsdag",
    "Fredag",
    "Lørdag"
]

let maaneder = [
    "Januar",
    "Februar",
    "Marts",
    "April",
    "Maj",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "December"
]



let datoKlokkeslaet = new Date()
currentMinutes = datoKlokkeslaet.getMinutes();
currentMinutes = ("0" + currentMinutes).slice(-2);

let klokkeslaet = enUge[datoKlokkeslaet.getDay()]
    + " "
    + datoKlokkeslaet.getDate()
    + "."
    + " "
    + maaneder[datoKlokkeslaet.getMonth()]
    + " "
    + datoKlokkeslaet.getHours()
    + ":"
    + currentMinutes;

arrays.innerHTML = klokkeslaet