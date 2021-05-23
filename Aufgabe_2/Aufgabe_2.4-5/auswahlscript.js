"use strict";
var Aufgabe_2_5;
(function (Aufgabe_2_5) {
    let buttonsDiv = document.getElementById("buttons");
    let path = window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1);
    let response = document.getElementById("response");
    let currentPick = document.getElementById("currentPick");
    currentKit();
    let speicherButton = document.createElement("button");
    speicherButton.id = "save";
    speicherButton.innerHTML = "save";
    speicherButton.addEventListener("click", nächsteAuswahl);
    buttonsDiv.appendChild(speicherButton);
    let abbrechenButton = document.createElement("button");
    abbrechenButton.id = "cancel";
    abbrechenButton.innerHTML = "cancel";
    abbrechenButton.addEventListener("click", abbrechen);
    buttonsDiv.appendChild(abbrechenButton);
    let zurückButton = document.createElement("button");
    zurückButton.id = "back";
    zurückButton.innerHTML = "back";
    zurückButton.addEventListener("click", zurück);
    buttonsDiv.appendChild(zurückButton);
    function abbrechen() {
        window.open("index.html", "_self");
        console.log("Abgebrochen");
    }
    function zurück() {
        let vorherigeSeite;
        if (path == "auswahlRetroKit.html") {
            vorherigeSeite = "auswahlDrumKit.html";
        }
        else if (path == "auswahlLoopKit.html") {
            vorherigeSeite = "auswahlRetroKit.html";
        }
        else if (path == "auswahlDrumKit.html") {
            vorherigeSeite = "index.html";
        }
        window.open(vorherigeSeite, "_self");
    }
    let previousElement = document.getElementById("functions");
    function wählen(_kit) {
        let art = _kit.DrumKit;
        if (window.location.href.includes("auswahlRetroKit.html"))
            art = _kit.RetroKit;
        if (window.location.href.includes("auswahlLoopKit.html"))
            art = _kit.LoopKit;
        return art;
    }
    async function transformieren(_url) {
        let antwort = await fetch(_url);
        let inhalt = await antwort.json();
        console.log("Repsonse", inhalt);
        let wahl = wählen(inhalt);
        auswählen(wahl);
    }
    transformieren("data.json");
    function auswählen(_ausgewählt) {
        for (let index = 0; index < _ausgewählt.length; index++) {
            let img = document.createElement("img");
            img.setAttribute("src", _ausgewählt[index].link);
            img.addEventListener("click", function event() {
                speichern(_ausgewählt[index].link, _ausgewählt[index].link);
                currentKit();
            });
            img.id = _ausgewählt[index].name;
            previousElement.appendChild(img);
        }
    }
    function nächsteAuswahl() {
        if (window.location.href.includes("auswahlDrumKit.html")) {
            if (sessionStorage.getItem("DrumKit") == null) {
                response.innerHTML = "chose something";
                return;
            }
            window.open("auswahlRetroKit.html", "_self");
        }
        if (window.location.href.includes("auswahlRetroKit.html")) {
            if (sessionStorage.getItem("RetroKit") == null) {
                response.innerHTML = "chose something";
                return;
            }
            window.open("auswahlLoopKit.html", "_self");
        }
        if (window.location.href.includes("auswahlLoopKit.html")) {
            if (sessionStorage.GetItem("LoopKit") == null) {
                response.innerHTML = "chose something";
                return;
            }
            window.open("completeBundle.html", "_self");
        }
    }
    function speichern(_link, _typ) {
        sessionStorage.setItem(_typ, _link);
    }
    function currentKit() {
        if (path == "auswahlDrumKit.html") {
            currentPick.innerHTML = "";
            let imgDrumKit = document.createElement("img");
            imgDrumKit.setAttribute("src", sessionStorage.etItem("DrumKit"));
            currentPick.appendChild(imgDrumKit);
        }
        else if (path == "auswahlDrumKit.html") {
            currentPick.innerHTML = "";
            let imgDrumKit = document.createElement("img");
            imgDrumKit.setAttribute("src", sessionStorage.getItem("DrumKit"));
            currentPick.appendChild(imgDrumKit);
            let imgRetroKit = document.createElement("img");
            imgRetroKit.setAttribute("src", sessionStorage.getItem("Retrokit"));
            currentPick.appendChild(imgRetroKit);
        }
        else if (path == "auswahlLoopKit.html") {
            currentPick.innerHTML = "";
            let imgDrumKit = document.createElement("img");
            imgDrumKit.setAttribute("src", sessionStorage.getItem("DrumKit"));
            currentPick.appendChild(imgDrumKit);
            let imgRetroKit = document.createElement("img");
            imgRetroKit.setAttribute("src", sessionStorage.getItem("RetroKit"));
            currentPick.appendChild(imgRetroKit);
            let imgLoopKit = document.createElement("img");
            imgLoopKit.setAttribute("src", sessionStorage.getItem("LoopKit"));
            currentPick.appendChild(imgLoopKit);
        }
    }
})(Aufgabe_2_5 || (Aufgabe_2_5 = {}));
//# sourceMappingURL=auswahlscript.js.map