const audio = document.querySelector("audio");
const musicBtn = document.querySelector(".musicButton");
const container = document.querySelector(".container");
const mask = document.querySelector(".mask");
const downloadBtn = document.querySelector(".downloadButton");
const download = document.querySelector(".download");
const cancleBtn = document.querySelector(".cancle");
const loginBtn = document.querySelector(".loginButton");
const login = document.querySelector(".login");
const loginCancleBtn = document.querySelector(".login .loginCancle");
const itemBox = document.querySelector(".itemBox");
const navMark = document.querySelector(".navMark");
const items = document.querySelectorAll(".items a");

let playMusicURL = "../images/nav/playMusic.png";
let playMusicURL2 = "../../images/nav/playMusic.png";
let pauseMusicURL = "../images/nav/paused.png";
let pauseMusicURL2 = "../../images/nav/paused.png";
let audioURL1 = "../audios/bgm.mp3";
let audioURL2 = "../../audios/bgm.mp3";
let documentHeight = document.documentElement.scrollHeight;
let play = false;

function preventMouseWheelScroll(event) {
  event.preventDefault();
}

function checkFileExists(path) {
  let xhr = new XMLHttpRequest();
  xhr.open("HEAD", path, false);
  xhr.send();
  return xhr.status !== 404;
}

if (checkFileExists(audioURL1)) {
  audio.src = audioURL1;
}
else {
  audio.src = audioURL2;
}
audio.volume = 0.3;
audio.pause();

musicBtn.addEventListener("click", function () {
  play = !play;
  if (play) {
    audio.play();
    if (checkFileExists(playMusicURL)) {
      musicBtn.src = playMusicURL;
    }
    else {
      musicBtn.src = playMusicURL2;
    }
  }
  else {
    audio.pause();
    if (checkFileExists(pauseMusicURL)) {
      musicBtn.src = pauseMusicURL;
    }
    else {
      musicBtn.src = pauseMusicURL2;
    }
  }
});

downloadBtn.addEventListener("click", function (e) {
  mask.style.height = `${documentHeight}px`;
  mask.style.visibility = "visible";
  window.addEventListener("mousewheel", preventMouseWheelScroll, { passive: false });
  window.addEventListener("DOMMouseScroll", preventMouseWheelScroll, { passive: false });
  download.style.visibility = "visible";
});
loginBtn.addEventListener("click", function () {
  mask.style.height = `${documentHeight}px`;
  mask.style.visibility = "visible";
  window.addEventListener("mousewheel", preventMouseWheelScroll, { passive: false });
  window.addEventListener("DOMMouseScroll", preventMouseWheelScroll, { passive: false });
  login.style.visibility = "visible";
});
mask.addEventListener("click", function (e) {
  mask.style.height = `0px`;
  mask.style.visibility = "hidden";
  window.removeEventListener("mousewheel", preventMouseWheelScroll, { passive: false });
  window.removeEventListener("DOMMouseScroll", preventMouseWheelScroll, { passive: false });
  download.style.visibility = "hidden";
  login.style.visibility = "hidden";
});
cancleBtn.addEventListener("click", function (e) {
  mask.style.height = `0px`;
  mask.style.visibility = "hidden";
  window.removeEventListener("mousewheel", preventMouseWheelScroll, { passive: false });
  window.removeEventListener("DOMMouseScroll", preventMouseWheelScroll, { passive: false });
  download.style.visibility = "hidden";
});
loginCancleBtn.addEventListener("click", function (e) {
  mask.style.height = `0px`;
  mask.style.visibility = "hidden";
  window.removeEventListener("mousewheel", preventMouseWheelScroll, { passive: false });
  window.removeEventListener("DOMMouseScroll", preventMouseWheelScroll, { passive: false });
  login.style.visibility = "hidden";
  console.log(123);
});

for (let i = 0; i < items.length; i++) {
  items[i].addEventListener("mouseenter", function() {
    let distance = items[i].offsetLeft - navMark.offsetLeft;
    navMark.style.transform = `translateX(${distance}px)`;
  });
}

itemBox.addEventListener("mouseleave", function() {
  navMark.style.transform = `translateX(0px)`;
});