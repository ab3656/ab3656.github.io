var wallHit = false;
var start = false;
var end = false;
$(document).ready(function () {
    $("#start").click(start);
    $("#end").mouseover(end);
});

var move = function () {
    $(".boundary").addClass("youlose");
    $("#status").text("Move the mouse without touching the walls!");
    wallHit = true;
};

var end = function () {    
    if (start) {
        end = true;
        if (!wallHit) {
            $("#status").text("You won! :]");
        } else {
            $("#status").text("Sorry, you lost! :[");
        }
    }
};

var start = function () {
    start = true;
    $(".boundary").mouseover(move);
    $("#status").text("Move the mouse without touching the walls!");
    wallHit = false;
    $(".boundary").removeClass("youlose");
};