function getWordDefinitions(){
    console.log("processing ajax");
    $.ajax({
        type: "GET",
        url : 'dictServlet',
        data : {
            word : $('#word').val()
        },
        success : function(responseText) {
            console.log(responseText);
        }
    });
}