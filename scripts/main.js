/*jslint plusplus: true */
/*global require, console */

require(['LoremBreizhum'], function (LoremBreizhum) {
    "use strict";
    var i;
    
    function generate(number) {
        var textarea = document.getElementById("text-" + number + "p"),
            textareaHTML = document.getElementById("text-" + number + "p-html");
        
        textarea.innerHTML = LoremBreizhum.parseCommand("breizhum");
        textareaHTML.innerHTML = LoremBreizhum.parseCommand("breizhum_html");
        
        return false;
    }
    
    function associateWithButtons(i) {
        document.getElementById("generate-" + i + "p").onclick = function () { return generate(this.i); };
        document.getElementById("generate-" + i + "p").i = i;
    }
    
    for (i = 1; i <= 3; i++) {
        associateWithButtons(i);
    }
});