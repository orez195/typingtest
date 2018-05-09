var time = 60;
var startTimer = false;
setInterval(startUp, 1000);

function startUp(){
    if (startTimer) {
        time -= 1;
        document.getElementById("timer").innerHTML = time;
    }
    if (time === 0) {
        startTimer = false;
    }
}

var testText = document.getElementById("text-box")