let songs = [
      './assets/music/01.mp3',
      './assets/music/02.mp3',
      './assets/music/03.mp3',
      './assets/music/04.mp3',
      './assets/music/05.mp3',
      './assets/music/06.mp3',
      './assets/music/07.mp3'
  ];

  let songTitles = [
    'Feel the Love',
    'Kids See Ghosts',
    '4th Dimension',
    'Untitled',
    'Kudi\'s Montage',
    'Devil\'s Watch',
    'Reborn'
  ]

var songTitle = document.querySelector(".js-song-title");
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
    song.play();
}

function changeImgToPause() {
    document.querySelector('.js-play-btn-img').setAttribute('src', './assets/images/Pause.png');
}

function changeImgToPlay() {
    document.querySelector('.js-play-btn-img').setAttribute('src', './assets/images/Play.png');
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
    //$("#image img").attr("src",poster[currentSong]);
}

function pre(){
    
    currentSong--;
    if(currentSong < 0){
        currentSong = songs.length - 1;
    }
    playSong();
    changeImgToPause();
    updateListAppearance(currentSong);
    //$("#image img").attr("src",poster[currentSong]);
}
