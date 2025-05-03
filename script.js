let [hours, minutes, seconds] = [0, 0, 0];
let timer = null;

function updateDisplay() {
  let h = String(hours).padStart(2, '0');
  let m = String(minutes).padStart(2, '0');
  let s = String(seconds).padStart(2, '0');
  document.getElementById('display').innerText = `${h}:${m}:${s}`;
}

function stopwatch() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  updateDisplay();
}

function start() {
  if (timer !== null) return;
  timer = setInterval(stopwatch, 1000);
}

function pause() {
  clearInterval(timer);
  timer = null;
}

function reset() {
  clearInterval(timer);
  [hours, minutes, seconds] = [0, 0, 0];
  updateDisplay();
  timer = null;
  document.getElementById('laps').innerHTML = '';
}

function lap() {
  const lapTime = document.getElementById('display').innerText;
  const li = document.createElement('li');
  li.innerText = `Lap: ${lapTime}`;
  document.getElementById('laps').appendChild(li);
}
