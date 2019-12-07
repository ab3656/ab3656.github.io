window.onload = functionCaller;

function functionCaller(){
    var start = document.getElementById("start");
    var stop = document.getElementById("stop");
    var size = document.getElementById("size");
    var speed = document.getElementById("speed");
    var animation = document.getElementById("animation");
    if(!start.disabled) {
        stop.disabled = true;
    }
    if(!stop.disabled) 
    {
        start.disabled = true;
    }
}

function startAnimation() {

}

function stopAnimation(){

}

function setSize() {

}

function setSpeed() {

}

function setAnimation() {
    animation = ANIMATIONS[document.getElementById("animation").value];
}