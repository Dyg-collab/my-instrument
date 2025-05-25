const keys = document.querySelectorAll('.key');

function playNote(note) {
  const audio = new Audio(`sounds/${note}.wav`);  
  audio.currentTime = 0;
  audio.play();
  
  
  setTimeout(() => {
    audio.pause();
    audio.currentTime = 0;
  }, 1000);
}


function flashKey(el) {
  el.classList.add('active');
  setTimeout(() => el.classList.remove('active'), 100);
}

keys.forEach(keyEl => {
  keyEl.addEventListener('click', () => {
    const note = keyEl.dataset.note;
    playNote(note);
    flashKey(keyEl);
  });
});

window.addEventListener('keydown', e => {
  const keyChar = e.key.toLowerCase();
  const target = document.querySelector(`.key[data-key="${keyChar}"]`);
  if (!target) return;
  target.click();
});
