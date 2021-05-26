"use strict";
var Aufgabe_2_5;
(function (Aufgabe_2_5) {
    let completeKit = document.getElementById("completeKit");
    let buttonsDiv = document.getElementById("buttons");
    function speicherAnzeigen() {
        let imgDrumKit = document.createElement("img");
        imgDrumKit.setAttribute("src", sessionStorage.getItem("drumkit"));
        completeKit.appendChild(imgDrumKit);
        let imgRetroKit = document.createElement("img");
        imgRetroKit.setAttribute("src", sessionStorage.getItem("retrokit"));
        completeKit.appendChild(imgRetroKit);
        let imgLoopKit = document.createElement("img");
        imgLoopKit.setAttribute("src", sessionStorage.getItem("loopkit"));
        completeKit.appendChild(imgLoopKit);
    }
    speicherAnzeigen();
    let startseite = document.createElement("button");
    startseite.id = "abbrechen";
    startseite.innerHTML = "Gefällt mir doch nicht, ich möchte von vorne beginnen";
    startseite.addEventListener("click", neuBeginnen);
    buttonsDiv.appendChild(startseite);
    function neuBeginnen() {
        window.open("auswahlDrumKit.html", "_self");
        console.log("Abgebrochen");
    }
    if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "completeKit.html") {
        servercheck();
    }
    async function servercheck() {
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(sessionStorage);
        let url = "https://gis-communication.herokuapp.com";
        url = url + "?" + query.toString();
        let serverantwort = await fetch(url);
        let rückmeldung = await serverantwort.json();
        if (rückmeldung.error != undefined) {
            console.log(rückmeldung.error);
            let messagediv = document.getElementById("error");
            messagediv.appendChild(document.createTextNode("" + rückmeldung.error));
        }
        else if (rückmeldung.message != undefined) {
            console.log(rückmeldung.message);
            let messagediv = document.getElementById("message");
            messagediv.appendChild(document.createTextNode("" + rückmeldung.message));
        }
    }
})(Aufgabe_2_5 || (Aufgabe_2_5 = {}));
//# sourceMappingURL=completeKit.js.map