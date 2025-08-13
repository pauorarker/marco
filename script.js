function openPlayer(audioSrc) {
  const popup = document.getElementById('popup-player');
  const player = document.getElementById('audio-player');
  player.src = audioSrc;
  popup.style.display = 'block';
  player.play();
}
function closePlayer() {
  const popup = document.getElementById('popup-player');
  const player = document.getElementById('audio-player');
  player.pause();
  player.currentTime = 0;
  popup.style.display = 'none';
}
