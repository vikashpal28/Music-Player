let progress = document.getElementById("progress");
let song = document.getElementById("songs");
let cntrlIcon = document.getElementById("cntrlIcon");

song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
};

function PlayPause() {
  if (cntrlIcon.classList.contains("fa-pause")) {
    song.pause();
    cntrlIcon.classList.remove("fa-pause");
    cntrlIcon.classList.add("fa-play");
  } else {
    song.play();
    cntrlIcon.classList.add("fa-pause");
    cntrlIcon.classList.remove("fa-play");
  }
}
if (song.play()) {
  setInterval(() => {
    progress.value = song.currentTime;
  }, 500);
}
progress.onchange = function () {
  song.play();
  song.currentTime = progress.value;
  cntrlIcon.classList.add("fa-pause");
  cntrlIcon.classList.remove("fa-play");
};
