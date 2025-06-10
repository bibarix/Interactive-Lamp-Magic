const bulb = document.getElementById('bulb');
const body = document.body;
const string = document.getElementById('string');
const knob = document.getElementById('knob');

let isDragging = false;
let startY = 0;
let maxPull = 80; // px
let isOn = false;

string.addEventListener('mousedown', (e) => {
  isDragging = true;
  startY = e.clientY;
  document.body.style.cursor = 'grabbing';
});

window.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  const dy = e.clientY - startY;
  const pull = Math.min(Math.max(dy, 0), maxPull);
  string.style.height = 120 + pull + "px";
  knob.style.bottom = -8 - pull + "px";
});

window.addEventListener('mouseup', (e) => {
  if (!isDragging) return;
  isDragging = false;
  document.body.style.cursor = 'default';

  const dy = e.clientY - startY;
  if (dy > 50) {
    isOn = !isOn;
    bulb.classList.toggle('on', isOn);
    body.classList.toggle('day', isOn);
  }

  // Reset string
  string.style.height = "120px";
  knob.style.bottom = "-8px";
});
