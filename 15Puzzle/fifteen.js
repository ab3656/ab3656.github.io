$(function(){
    $("#puzzlearea").css("background-image", "url(background.jpg)");
    init();
});

var init = function() {
    $("#puzzlearea > div").each(function(i){
        // calculate x and y for this piece
        var x = ((i % 4) * 100) ;
        var y = (Math.floor(i / 4) * 100) ;

        // set basic style and background
        $(this).addClass("puzzlepiece");
        $(this).css("left", x + 'px');
        $(this).css("top", y + 'px');
        $(this).css("background-image", 'url("background.jpg")');
        $(this).css("background-position", -x + 'px ' + (-y) + 'px');
        
        // store x and y for later
        $(this).x = x;
        $(this).y = y; 
    })       
};