let pomodoro = document.getElementById("pomodoro-timer");
let short = document.getElementById("short-timer");
let long = document.getElementById("long-timer");
let stopBtn = document.getElementById("stop");
let startBtn = document.getElementById("start");
let currentTimer = pomodoro;
let myInterval = null;

function startTimer(timerDisplay) {
  if (myInterval) {
    clearInterval(myInterval);
  }

  let timeDuration = parseInt(timerDisplay.getAttribute("data-duration"));
   let durationInMilliseconds = timeDuration * 60 * 1000;
  let endTimestamp = Date.now() + durationInMilliseconds;

  myInterval = setInterval(() => {
    let timeRemaining = endTimestamp - Date.now();

    if (timeRemaining <= 0) {
       clearInterval(myInterval);
          timerDisplay.querySelector(".time").textContent = "00:00";

      const alarm = new Audio(
        "https://www.freespecialeffects.co.uk/soundfx/scifi/electronic.wav"
      );
      alarm.play();
      
    } else {
      const minutes = Math.floor(timeRemaining / 60000);
      const seconds = Math.floor((timeRemaining % 60000) / 1000);
      const formattedTime = `${minutes}:${seconds.toString().padStart(2, "0")}`;



      timerDisplay.querySelector(".time").textContent = formattedTime;
    }
  }, 1000);
}


document.getElementById("Start").addEventListener("click", () => {
  currentTimer = pomodoro;
});
document.getElementById("Stop").addEventListener("click", () => {
  currentTimer = short;
});
document.getElementById("Reset").addEventListener("click", () => {
  currentTimer = long;
});


startBtn.addEventListener("click", () => {
  if (currentTimer) {
    startTimer(currentTimer);
  }
});

stopBtn.addEventListener("click", () => {
  if (currentTimer) {
    clearInterval(myInterval);
  }
});
