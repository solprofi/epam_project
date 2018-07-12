var songs = [
    "./assets/music/Tuscan Leather.mp3",
    "./assets/music/Furthest Thing.mp3",
    "./assets/music/Started from the Bottom.mp3",
    "./assets/music/Wu-Tang Forever.mp3",
    "./assets/music/Own It.mp3",
    "./assets/music/Worst Behavior.mp3",
    "./assets/music/From Time feat. Jhené Aiko.mp3",
    "./assets/music/Hold On, We're Going Home feat. Majid Jordan.mp3"
];

var songTitles = [
    "Tuscan Leather",
    "Furthest Thing",
    "Started from the Bottom",
    "Wu-Tang Forever",
    "Own It",
    "Worst Behavior",
    "From Time feat. Jhené Aiko",
    "Hold On, We're Going Home"
]
var poster = ["./assets/images/player-album-bg.jpeg","Poster2.jpg","Poster3.jpg"];


// function getDuration(src, cb) {
//     var audio = new Audio();
//     $(audio).on("loadedmetadata", function(){
//         cb(audio.duration);
//     });
//     audio.src = src;
// }

// var songLengths = songs.map( el => getDuration(el, (length) => length));
// console.log(songLengths);


// getDuration("./assets/music/Tuscan Leather.mp3", function(length) {
//     console.log('I got length ' + length);
// });


var songTitle = document.getElementById("songTitle");
var fillBar = document.getElementById("fill");
var tracksList = document.getElementsByClassName('track-list__track');

var prevSong = 0; //previous selected song

var song = new Audio();

var currentSong = 0;    // it point to the current song

window.onload = initialize;   // it will call the function playSong when window is load

function pickSong(i) {
    currentSong = i;
    updateListAppearance(i);
    playSong();  
    changeImgToPause();
}

function initialize() {
    updateListAppearance(0);
    playSong();
}

function updateListAppearance(i) {
    tracksList[prevSong].style.fontWeight = "normal";
    tracksList[prevSong].style.textTransform = "capitalize";

    tracksList[i].style.fontWeight = "700";
    tracksList[i].style.textTransform = "uppercase";
    prevSong = i;
}


function playSong(){
    song.src = songs[currentSong];  //set the source of 0th song 
    songTitle.textContent = songTitles[currentSong]; // set the title of song
    // song.play();
}

function changeImgToPause() {
    $("#play img").attr("src", "./assets/images/Pause.png");
}

function changeImgToPlay() {
    $("#play img").attr("src", "./assets/images/Play.png");
}




function playOrPauseSong(){
    
    if(song.paused){
        song.play();
        changeImgToPause();
    }
    else{
        song.pause();
        changeImgToPlay();
    }
}

song.addEventListener('timeupdate', function(){ 
    
    var position = song.currentTime / song.duration;
    
    fillBar.style.width = position * 100 +'%';
});

document.addEventListener('keyup', function (e) {
    var key = e.which || e.keyCode;
    
    if(key === 32) {
        playOrPauseSong();
    } else if (key === 37) {
        pre();
    } else if (key === 39) {
        next();
    }
    
});



function next(){
    currentSong++;
    if(currentSong > songs.length - 1 ){
        currentSong = 0;
    }
    playSong();
    changeImgToPause();
    updateListAppearance(currentSong);
    $("#image img").attr("src",poster[currentSong]);
}

function pre(){
    
    currentSong--;
    if(currentSong < 0){
        currentSong = songs.length - 1;
    }
    playSong();
    changeImgToPause();
    updateListAppearance(currentSong);
    $("#image img").attr("src",poster[currentSong]);
}
