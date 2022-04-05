var startButton = document.querySelector(".start");
var timer = document.querySelector(".clock");

var seconds = 0;
var minutes = 5;

function displayTimer() {
    if (seconds < 10) {
        if (minutes < 10) {
            timer.textContent = "0" + minutes + ":" + "0" + seconds;
        }
        else{
            timer.textContent = minutes + ":" + "0" + seconds; 
        }
    }
    else{
        if (minutes < 10) {
            timer.textContent = "0" + minutes + ":" + seconds;
        }
        else{
            timer.textContent = minutes + ":" + seconds; 
        }
    }
}

function updateTimer(){
    if (seconds == 0) {
        seconds = 60;
        minutes--;
    }
    seconds--;
    displayTimer();
}

function startTimer(event) {
    event.preventDefault();
    setInterval(updateTimer, 1000);
}

startButton.addEventListener("click", startTimer);
