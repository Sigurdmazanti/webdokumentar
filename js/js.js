/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

//#region Video
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
        //#endregion

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

let klokkeslaet = enUge[datoKlokkeslaet.getDay()]
    + " "
    + datoKlokkeslaet.getDate()
    + "."
    + " "
    + maaneder[datoKlokkeslaet.getMonth()]
    + " "
    + datoKlokkeslaet.getHours()
    + ":";

let alleData = datoKlokkeslaet.getMinutes() < 10 ? '0' : '' + datoKlokkeslaet.getMinutes();

arrays.innerHTML = klokkeslaet + alleData
