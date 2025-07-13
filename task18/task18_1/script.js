const timeInput = document.getElementById("timeInput");
const startBtn = document.getElementById("startBtn");
const timersContainer = document.getElementById("timers");

function formatTime(seconds) {
    const min = String(Math.floor(seconds / 60)).padStart(2, '0');
    const sec = String(seconds % 60).padStart(2, '0');
    return `${min}:${sec}`;
}

function createTimer(duration) {
    let remaining = duration;
    const timerDiv = document.createElement("div");
    timerDiv.classList.add("timer");

    const timeDisplay = document.createElement("div");
    timeDisplay.className = "time";
    timeDisplay.textContent = formatTime(remaining);

    const stopBtn = document.createElement("button");
    stopBtn.className = "stop-btn";
    stopBtn.textContent = "Stop";

    let interval = setInterval(() => {
        remaining--;
        timeDisplay.textContent = formatTime(remaining);

        if (remaining <= 0) {
            clearInterval(interval);
            timeDisplay.textContent = "00:00";
        }
    }, 1000);

    stopBtn.addEventListener("click", () => {
        clearInterval(interval);
    });

    timerDiv.appendChild(timeDisplay);
    timerDiv.appendChild(stopBtn);
    timersContainer.appendChild(timerDiv);
}

startBtn.addEventListener("click", () => {
    const seconds = parseInt(timeInput.value);
    if (!isNaN(seconds) && seconds > 0) {
        createTimer(seconds);
        timeInput.value = "";
    }
});