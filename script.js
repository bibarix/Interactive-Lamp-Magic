const lamp = document.getElementById('lamp');
let isOn = false;

function toggleLamp() {
  isOn = !isOn;
  lamp.classList.toggle('on', isOn);
}
