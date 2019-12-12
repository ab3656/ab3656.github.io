var wallHit = false;
var start = false;
$(document).ready(function () {    
    $("#start").click(start);    
    $("#end").mouseover(end);     
});

var move = function () {
    $(".boundary").addClass("youlose");
    wallHit = true;
};

var end = function () {
    if(!wallHit) {        
        $("#status").text("You won! :]");           
    }
    else {
        $("#status").text("Sorry, you lost! :[");
    }
};

var start = function(){
    $(".boundary").mouseover(move);  
    start = true;
    if(!wallHit) 
    {
        $("#status").text("Move the mouse without touching the walls!");
    }
    wallHit = false;
    $(".boundary").removeClass("youlose");
};