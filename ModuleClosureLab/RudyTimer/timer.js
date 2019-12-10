window.onload = rudyTimer;

var timer = null; // stores ID of interval timer

var rudyTimer = (function (){
    if (timer === null) {
        timer = setInterval(rudy, 1000);
    } else {
        clearInterval(timer);
        timer = null;
    }
});

function rudy() { // called each time the timer goes
    document.getElementById("output").innerHTML += "Rudy!";
}