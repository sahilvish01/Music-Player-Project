
const songsArr =
[
    {
        singer: "Honey Singh",
        title: "Blue Eyes",
        song: "songs/BlueEyes.m4a"
    },
    {
        singer: "Paradox",
        title: "BT Ho Gayi",
        song: "songs/BThogayi.m4a"
    },
    {
        singer: "Chaar Diwari",
        title: "Farebi",
        song: "songs/Farebi.m4a"
    },
    {
        singer: "Dhandha Nyoliwala",
        title: "Haryana Hood",
        song: "songs/HaryanaHood.m4a"
    },
    {
        singer: "Diljeet Dosanjh",
        title: "Hass Hass",
        song: "songs/HassHass.m4a"
    },
    {
        singer: "KR$NA",
        title: "Hola Amigo",
        song: "songs/HolaAmigo.m4a"
    },
    {
        singer: "KR$NA",
        title: "I Guess",
        song: "songs/IGuess.m4a"
    },
    {
        singer: "KR$NA",
        title: "No Cap",
        song: "songs/NoCap.m4a"
    },
    {
        singer: "Afusic X Talwiinder",
        title: "Pal Pal",
        song: "songs/PalPal.m4a"
    },
    {
        singer: "Karan Aujila",
        title: "Softly",
        song: "songs/Softly.m4a"
    }

]


const playBtn = document.querySelector("#playBtn")
const audio = document.querySelector("audio");


let playing = false;
let currentSong = 0;
audio.src = songsArr[currentSong].song;


playBtn.addEventListener("click", () =>
{

    if(playing)
    {
        audio.pause();
        playing = false;
        playBtn.src = "https://icons.iconarchive.com/icons/github/octicons/128/play-24-icon.png"
        return;
    }
    
    audio.play();
    playBtn.src = "https://icons.iconarchive.com/icons/colebemis/feather/128/pause-circle-icon.png"
    playing = true;
})