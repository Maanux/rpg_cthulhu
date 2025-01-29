let currentAudio = null;

function playMusic(musicFile) {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
  currentAudio = new Audio(`audios/${musicFile}`);
  currentAudio.play();
}

function stopMusic() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
}
