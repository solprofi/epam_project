let songs = [
  [
    './assets/music/01.mp3',
    './assets/music/02.mp3',
    './assets/music/03.mp3',
    './assets/music/04.mp3',
    './assets/music/05.mp3',
    './assets/music/06.mp3',
    './assets/music/07.mp3'
  ],
  [
    './assets/music/1.mp3',
    './assets/music/2.mp3',
    './assets/music/3.mp3',
    './assets/music/4.mp3',
    './assets/music/5.mp3',
    './assets/music/6.mp3',
    './assets/music/7.mp3',
    './assets/music/8.mp3',
    './assets/music/9.mp3',
    './assets/music/10.mp3',
    './assets/music/11.mp3',
    './assets/music/12.mp3',
    './assets/music/13.mp3',
    './assets/music/14.mp3'
  ]
];
let headings = [
  'Kids see ghosts',
  'Coloring Book',
  'wolf',
  'flower boy',
  'abbey road',
  'nevermind',
  'damn',
  'sgt. pepper\'s lonely heart club band',
  'shanghai tunes',
  'vhs',
  'Freudian',
  'магниты'
]
let trackLists = [
  [
    'Feel the Love',
    'Kids See Ghosts',
    '4th Dimension',
    'Untitled',
    'Kudi\'s Montage',
    'Devil\'s Watch',
    'Reborn'
  ],
  [
    'All We Got',
    'No Problem(feat.Lil Wayne, 2 Chainz)',
    'Summer Friends',
    'D.R.A.M.Sings Special',
    'Blessings',
    'Same Drugs',
    'Mixtape(feat.Young Thug, Lil Yachty)',
    'Angels(feat.Saba)',
    'Juke Jam(feat.Justin Bieber, Towkio)',
    'All Night(feat.Knox Fortune)',
    'How Great(feat.Jay Electronica, My cousin Nicole)',
    'Smoke Break(feat.Future)',
    'Finish Line Drown',
    'Blessings'
  ],
  [
    'Wolf',
    'Jamba (Feat. Hodgy Beats)',
    'Cowboy',
    'Awkward',
    'Domo23',
    'Answer',
    'Slater/Escape-ism (Feat. Frank Ocean & Dave Matthews)',
    '48',
    'Colossus/The Bridge of Love',
    'Partyisntover/Campfire/Bimmer (Feat. Lætitia Sadier & Frank Ocean)',
    'IFHY (Feat. Pharrell)',
    'Pigs',
    'Parking Lot (Feat. Mike G & Casey Veggies)',
    'Rusty (Feat. Domo Genesis & Earl Sweatshirt)',
    'Trashwang (Feat. Na-kel, Jasper, Lucas, L-Boy, Taco, Left Brain & Lee Spielman)',
    'Treehome95 (Feat. Coco O. & Erykah Badu)',
    'Tamale (Feat. Tallulah)',
    'Lone/Jornada'
  ],
  [
    'Foreword',
    'Where This Flower Blooms',
    'Sometimes...',
    'See You Again',
    'Who Dat Boy?',
    'Pothole',
    'Garden Shed',
    'Boredom',
    'I Ain\'t Got Time!',
    '911 / Mr. Lonely',
    'Dropping Seeds',
    'November',
    'Glitter',
    'Enjoy Right Now Today'
  ],
  [
    'Come Together',
    'Something',
    'Maxwell\'s Silver Hammer',
    'Oh! Darling',
    'Octopus\'s Garden',
    'I Want You (She\'s So Heavy)',
    'Here Comes the Sun',
    'Because',
    'You Never Give Me Your Money',
    'Sun King',
    'Mean Mr. Mustard',
    'Polythene Pam',
    'She Came in Through the Bathroom Window',
    'Golden Slumbers',
    'Carry That Weight',
    'The End',
    'Her Majesty'
  ],
  [
    'Smells Like Teen Spirit',
    'In Bloom',
    'Come As You Are',
    'Breed',
    'Lithium',
    'Polly',
    'Territorial Pissings',
    'Drain You',
    'Lounge Act',
    'Stay Away',
    'On a Plain',
    'Something in the Way',
    'Endless, Nameless'
  ],
  [
    'BLOOD.',
    'DNA.',
    'YAH.',
    'ELEMENT.',
    'FEEL.',
    'LOYALTY. ft. Rihanna',
    'PRIDE.',
    'HUMBLE.',
    'LUST.',
    'LOVE. ft. Zacari',
    'XXX. ft. U2',
    'FEAR.',
    'GOD.',
    'DUCKWORTH.'
  ],
  [
    'Sgt. Pepper\'s Lonely Hearts Club Band',
    'With a Little Help from My Friends',
    'Lucy in the Sky with Diamonds',
    'Getting Better',
    'Fixing a Hole',
    'She\'s Leaving Home',
    'Being for the Benefit of Mr. Kite!',
    'Within You Without You',
    'When I\'m Sixty-Four',
    'Lovely Rita',
    'Good Morning Good Morning',
    'Sgt. Pepper\'s Lonely Hearts Club Band (Reprise)',
    'A Day In the Life'
  ],
  [
    'Track 1',
    'Track 2',
    'Track 3',
    'Track 4',
    'Track 5',
    'Track 6',
    'Track 7',
    'Track 8',
    'Track 9',
    'Track 10'
  ],
  [
    'Renegades Lyrics',
    'Unsteady Lyrics',
    'Hang On Lyrics',
    'Gorgeous Lyrics',
    'Fear (Ft. Imagine Dragons) Lyrics',
    'Nervous Lyrics',
    'Low Life (Ft. Jamie N Commons) Lyrics',
    'B.I.G. Lyrics',
    'Feather Lyrics',
    'Superpower Lyrics',
    'Loveless Lyrics',
    'Jungle (Ft. Jamie N Commons) Lyrics ',
    'Naked Lyrics',
    'Low Life 2.0 (Ft. A$AP Ferg & Jamie N Commons) Lyrics ',
    'Kerosene Dreams Lyrics',
    'Collider (Ft. Tom Morello) Lyrics',
    'Gorgeous - Live - Upstate Sessions Lyrics',
    'Eye of the Storm Lyrics'
  ],
  [
    'Get You f. Kali Uchis',
    'Best Part f. H.E.R.',
    'Hold Me Down',
    'Neu Roses (Transgressor’s Song)',
    'Loose',
    'We Find Love',
    'Blessed',
    'Take Me Away f. Syd',
    'Transform f. Charlotte Day Wilson',
    'Freudian'
  ],
  [
    'Луна',
    'Затмение',
    'Думала',
    'Осень',
    'Бутылочка',
    'Магниты',
    'Бэмби',
    'Лютики',
    'Туман',
    'Расстояния',
    'Он с тобою не...',
    'Алиса',
    'Мальчик'
  ]
]

let backgrounds = [
  'url("../images/1.jpg")',
  'url("../images/2.jpg")',
  'url("../images/3.jpg")',
  'url("../images/4.jpg")',
  'url("../images/5.jpg")',
  'url("../images/6.jpg")',
  'url("../images/7.jpg")',
  'url("../images/8.jpg")',
  'url("../images/9.jpg")',
  'url("../images/10.jpg")',
  'url("../images/11.jpg")',
  'url("../images/12.jpg")'
]

let songTitle = document.querySelector('.js-song-title');
let fillBar = document.getElementById('fill');
let track = document.getElementsByClassName('track-list__track');
let trackBox = document.querySelector('.track-box');
let trackBoxHeading = document.querySelector('.track-box__heading');
let trackList = document.querySelector('.track-list');
let player = document.querySelector('.floating-player-col');

let albumSelected;
let isPrevAlbumSelected = false;
let prevAlbum;
let prevSong = 0; //previous selected song
let songPlayed = false;
let song = new Audio();
let currentSong = 0;    // it point to the current song

trackBox.style.display = 'none';

function pickSong(i) {
  if (!songPlayed)
    songPlayed = true;
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
  track[prevSong].style.fontWeight = 'normal';
  track[prevSong].style.textTransform = 'capitalize';

  track[i].style.fontWeight = '700';
  track[i].style.textTransform = 'uppercase';
  prevSong = i;
}


function playSong() {
  song.src = songs[albumSelected][currentSong];  //set the source of 0th song 
  songTitle.textContent = trackLists[albumSelected][currentSong]; // set the title of song
  song.play();
}

function changeImgToPause() {
  document.querySelector('.js-play-btn-img').setAttribute('src', './assets/images/Pause.png');
}

function changeImgToPlay() {
  document.querySelector('.js-play-btn-img').setAttribute('src', './assets/images/Play.png');
}

function playOrPauseSong() {

  if (!isPrevAlbumSelected || !songPlayed)
    return;
  if (song.paused) {
    song.play();
    changeImgToPause();
  }
  else {
    song.pause();
    changeImgToPlay();
  }
}

song.addEventListener('timeupdate', function () {

  let position = song.currentTime / song.duration;

  fillBar.style.width = position * 100 + '%';
});

document.addEventListener('keyup', function (e) {
  let key = e.which || e.keyCode;

  if (key === 32) {
    playOrPauseSong();
  } else if (key === 37) {
    pre();
  } else if (key === 39) {
    next();
  }

});



function next() {
  currentSong++;
  if (currentSong > songs[albumSelected].length - 1) {
    currentSong = 0;
  }
  playSong();
  changeImgToPause();
  updateListAppearance(currentSong);
}

function pre() {

  currentSong--;
  if (currentSong < 0) {
    currentSong = songs[albumSelected].length - 1;
  }
  playSong();
  changeImgToPause();
  updateListAppearance(currentSong);
}


let albumList = document.getElementsByClassName('gallery__image');
albumList = Array.prototype.slice.call(albumList);
for (let i = 0; i < albumList.length; i++) {
  albumList[i].addEventListener('click', function () {
    document.querySelector('.library').classList.add('library_mobile');
    songPlayed = false;
    song.pause();
    changeImgToPlay();
    albumSelected = i;
    let playerBg = document.querySelector('.floating-player-col');
    playerBg.style.backgroundImage = `url('temp/images/${i + 1}.jpg')`;

    trackBoxHeading.innerText = headings[i];
    let tracks = trackLists[i].map((el, index) => `<li class="track-list__track" onclick="pickSong(${index})">${el}</li>`)
    if (isPrevAlbumSelected) {
      trackList.innerHTML = '';
    } else {
      isPrevAlbumSelected = true;
      trackBox.style.display = 'block';
    }
    for (let i = 0; i < tracks.length; i++) {
      trackList.innerHTML += tracks[i];
    }

    songTitle.textContent = 'Pick a song';
  });
}

