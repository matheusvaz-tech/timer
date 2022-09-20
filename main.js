var hours = (miliseconds = seconds = minutes = 0),
  interval;

function start() {
  timer();
  interval = setInterval(timer, 10);
}

function pause() {
  clearInterval(interval);
}

function stop() {
  clearInterval(interval);
  miliseconds = seconds = minutes = hours = 0;
  document.getElementById("timer").innerText = `00:00:00,00`;
}

function timer() {
  miliseconds++;
  if (miliseconds === 100) {
    seconds++;
    miliseconds = 0;
    if (seconds === 60) {
      minutes++;
      seconds = 0;
      if (minutes === 60) {
        hours++;
        minutes = 0;
      }
    }
  }
  let mil = miliseconds < 10 ? "0" + miliseconds : miliseconds;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let h = hours < 10 ? "0" + hours : hours;
  document.getElementById("timer").innerHTML = `${h}:${m}:${s},${mil}`;
}
