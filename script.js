const playButton = document.querySelector('.play-btn');
const progressFill = document.querySelector('.progress-fill');
let progress = 34;
let playing = false;

playButton?.addEventListener('click', () => {
  playing = !playing;
  playButton.textContent = playing ? '❚❚' : '▶';
  playButton.classList.toggle('play-active', playing);
});

function animateProgress() {
  progress = (progress + 0.12) % 100;
  progressFill.style.width = `${progress}%`;
  requestAnimationFrame(animateProgress);
}

requestAnimationFrame(animateProgress);
