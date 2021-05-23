"use strict";
var Aufgabe_2_5;
(function (Aufgabe_2_5) {
    let completeBundle = document.getElementById("completeBundle");
    let buttonsDiv = document.getElementById("buttons");
    function speicherAnzeigen() {
        let imgDrumKit = document.createElement("img");
        imgDrumKit.setAttribute("src", sessionStorage.getItem("DrumKit"));
        completeBundle.appendChild(imgDrumKit);
        let imgRetroKit = document.createElement("img");
        imgRetroKit.setAttribute("src", sessionStorage.getItem("RetroKit"));
        completeBundle.appendChild(imgRetroKit);
        let imgLoopKit = document.createElement("img");
        imgLoopKit.setAttribute("src", sessionStorage.getItem("LoopKit"));
        completeBundle.appendChild(imgLoopKit);
    }
    speicherAnzeigen();
    let startseite = document.createElement("button");
    startseite.id = "cancel";
    startseite.innerHTML = "Create New ";
    startseite.addEventListener("click", neuBeginnen);
    buttonsDiv.appendChild(startseite);
    function neuBeginnen() {
        window.open("index.html", "_self");
        console.log("canceled");
    }
    if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "completeBundle.html") {
        servercheck();
    }
    async function servercheck() {
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(sessionStorage);
        let url = "https://gis-communication.herokuapp.com";
        url = url + "?" + query.toString();
        let serverresponse = await fetch(url);
        let response = await serverresponse.json();
        if (response.error != undefined) {
            console.log(response.error);
            let messagediv = document.getElementById("error");
            messagediv.appendChild(document.createTextNode("" + response.error));
        }
        else if (response.message != undefined) {
            console.log(response.message);
            let messagediv = document.getElementById("message");
            messagediv.appendChild(document.createTextNode("" + response.message));
        }
    }
})(Aufgabe_2_5 || (Aufgabe_2_5 = {}));
//# sourceMappingURL=completeBundle.js.map