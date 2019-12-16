window.onload = (function(){
    var lookupWord = document.getElementById("lookup");
    lookupWord.onclick = (function(){
        events.getDefinitions();
    });
});

var events = (function(){
    function getDefinitions(){
        console.log("in js");
        getWordDefinitions();
    }

    return {
        getDefinitions: getDefinitions
    };
})();