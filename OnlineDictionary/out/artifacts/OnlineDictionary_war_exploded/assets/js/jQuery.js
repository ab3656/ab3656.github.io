function getWordDefinitions(){
    console.log("processing ajax");
    $("#lookup").click(function () {
        $("li").remove();
    });
    $.ajax({
        type: "GET",
        url : 'dictionary',
        data : {
            word : $('#word').val()
        },
        success : function(data) {
             $.each(data, function(index, element) {
                 var str = (index+1) + '(' + element.wordtype+')'+ ' :: ' +
                     element.definition;
                 $(".definitions").append('<li>'+ str +'</li>');
             });
        }
    });
}