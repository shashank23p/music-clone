console.log("welcome to music");

//Initialization the variables
let songindex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myprogressbar = document.getElementById("myprogressbar");
let gif = document.getElementById("gif");

let songitems = Array.from(document.getElementsByClassName("songitem"));

let songs = [
  {
    songName: "warriyo mortals",
    filePath: "songs/1.mp3",
    coverPath: "cover/1.jpg",
  },
  {
    songName: "breathless",
    filePath: "songs/2.mp3",
    coverPath: "cover/2.jpg",
  },
  {
    songName: "sajna hai mujhe",
    filePath: "songs/3.mp3",
    coverPath: "cover/3.jpg",
  },
  {
    songName: "halu halu chal",
    filePath: "songs/4.mp3",
    coverPath: "cover/4.jpg",
  },
  {
    songName: "Tu Hi Khwahish  Song ",
    filePath: "songs/5.mp3",
    coverPath: "cover/5.jpg",
  },
  {
    songName: " King  Tu Aake Dekhle",
    filePath: "songs/6.mp3",
    coverPath: "cover/6.jpg",
  },
  {
    songName: " Meri Madhubala",
    filePath: "songs/7.mp3",
    coverPath: "cover/7.jpg",
  },
];

songitems.forEach((Element, i) => {
  Element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  Element.getElementsByClassName("songname")[0].innerText = songs[i].songName;
});

// audioElemet.play();
// Handle play/pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
    gif.style.opacity = 0;
  }
});
// Listen to Events
audioElement.addEventListener("timeupdate", () => {
  //update seekbar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myprogressbar.value = progress;
});

myprogressbar.addEventListener("change", () => {
  audioElement.currentTime =
    (myprogressbar.value * audioElement.duration) / 100;
});

const makeallplays = () => {
  Array.from(document.getElementsByClassName("songitemsplay")).forEach(
    (Element) => {
      Element.target.classList.remove("fa-circle-pause");
      Element.classList.add("fa-circle-play");
    }
  );
};

Array.from(document.getElementsByClassName("songitemplay")).forEach(
  (Element) => {
    Element.addEventListener("click", (e) => {
      makeallplays();
      index = parseInt(e.target.id);
      e.target.classList.remove("fa-circle-play");
      e.target.classList.add("fa-circle-pause");
      audioElement.src = `songs/${index}5.mp3`;
      audioElement.currentTime = 0;
      audioElement.play();
      masterPlay.classList.remove("fa-circle-play");
      masterPlay.classList.add("fa-circle-pause");
    });
  }
);