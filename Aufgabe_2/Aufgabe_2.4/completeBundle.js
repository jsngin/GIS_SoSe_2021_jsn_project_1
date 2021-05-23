"use strict";
var Aufgabe_2_4;
(function (Aufgabe_2_4) {
    let completeBundle = document.getElementById("completeBundle");
    function speicherAnzeigen() {
        for (let index = 0; index < sessionStorage.length; index++) {
            let posLeft = "";
            let posTop = "";
            posLeft = (index * 200) + "px";
            posTop = 100 + "px";
            let img = document.createElement("img");
            img.style.position = "static";
            img.style.left = posLeft;
            img.style.top = posTop;
            img.style.margin = "10px";
            img.style.height = 200 + "px";
            img.style.width = 200 + "px";
            img.setAttribute("src", sessionStorage[index]);
            completeBundle.appendChild(img);
        }
    }
    speicherAnzeigen();
    let startseite = document.createElement("button");
    startseite.id = "cancel";
    startseite.innerHTML = "Create New ";
    startseite.addEventListener("click", neuBeginnen);
    completeBundle.appendChild(startseite);
    function neuBeginnen() {
        window.open("index.html", "_self");
        console.log("canceled");
    }
})(Aufgabe_2_4 || (Aufgabe_2_4 = {}));
//# sourceMappingURL=completeBundle.js.map