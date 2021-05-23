"use strict";
var Aufgabe_2_5;
(function (Aufgabe_2_5) {
    let buttonsDiv = document.getElementById("buttons");
    let path = window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1);
    let antwort = document.getElementById("antwort");
    let derzeitigAuswahl = document.getElementById("derzeitigeAuswahl");
    derzeitigKit();
    let speicherButton = document.createElement("button");
    speicherButton.id = "speichern";
    speicherButton.innerHTML = "speichern";
    speicherButton.addEventListener("click", nächsteAuswahl);
    buttonsDiv.appendChild(speicherButton);
    let abbrechenButton = document.createElement("button");
    abbrechenButton.id = "abbrechen";
    abbrechenButton.innerHTML = "abbrechen";
    abbrechenButton.addEventListener("click", abbrechen);
    buttonsDiv.appendChild(abbrechenButton);
    let zurückButton = document.createElement("button");
    zurückButton.id = "zurück";
    zurückButton.innerHTML = "zurück";
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
    let previousElement = document.getElementById("funktionen");
    function wählen(_Kit) {
        let art = _Kit.DrumKit;
        if (window.location.href.includes("auswahlRetroKit.html"))
            art = _Kit.RetroKit;
        if (window.location.href.includes("auswahlLoopKit.html"))
            art = _Kit.LoopKit;
        return art;
    }
    async function transformieren(_url) {
        let antwort = await fetch(_url);
        let inhalt = await antwort.json();
        console.log("Antwort", inhalt);
        let wahl = wählen(inhalt);
        auswählen(wahl);
    }
    transformieren("data.json");
    function auswählen(_ausgewählt) {
        for (let index = 0; index < _ausgewählt.length; index++) {
            let img = document.createElement("img");
            img.setAttribute("src", _ausgewählt[index].link);
            img.addEventListener("click", function event() {
                speichern(_ausgewählt[index].link, _ausgewählt[index].typ);
                derzeitigKit();
            });
            img.id = _ausgewählt[index].name;
            previousElement.appendChild(img);
        }
    }
    function nächsteAuswahl() {
        if (window.location.href.includes("auswahlDrumKit.html")) {
            if (sessionStorage.getItem("DrumKit") == null) {
                antwort.innerHTML = "BITTE WÄHLEN SIE ETWAS AUS.";
                return;
            }
            window.open("auswahlRetroKit.html", "_self");
        }
        if (window.location.href.includes("auswahlRetroKit.html")) {
            if (sessionStorage.getItem("RetroKit") == null) {
                antwort.innerHTML = "BITTE WÄHLEN SIE ETWAS AUS.";
                return;
            }
            window.open("auswahlLoopKit.html", "_self");
        }
        if (window.location.href.includes("auswahlLoopKit.html")) {
            if (sessionStorage.getItem("LoopKit") == null) {
                antwort.innerHTML = "BITTE WÄHLEN SIE ETWAS AUS.";
                return;
            }
            window.open("completeKit.html", "_self");
        }
    }
    function speichern(_link, _typ) {
        sessionStorage.setItem(_typ, _link);
    }
    function derzeitigKit() {
        if (path == "auswahlDrumKit.html") {
            derzeitigAuswahl.innerHTML = "";
            let imgDrumKit = document.createElement("img");
            imgDrumKit.setAttribute("src", sessionStorage.getItem("DrumKit"));
            derzeitigAuswahl.appendChild(imgDrumKit);
        }
        else if (path == "auswahlRetroKit.html") {
            derzeitigAuswahl.innerHTML = "";
            let imgDrumKit = document.createElement("img");
            imgDrumKit.setAttribute("src", sessionStorage.getItem("DrumKit"));
            derzeitigAuswahl.appendChild(imgDrumKit);
            let imgRetroKit = document.createElement("img");
            imgRetroKit.setAttribute("src", sessionStorage.getItem("RetroKit"));
            derzeitigAuswahl.appendChild(imgRetroKit);
        }
        else if (path == "auswahlLoopKit.html") {
            derzeitigAuswahl.innerHTML = "";
            let imgDrumKit = document.createElement("img");
            imgDrumKit.setAttribute("src", sessionStorage.getItem("DrumKit"));
            derzeitigAuswahl.appendChild(imgDrumKit);
            let imgRetroKit = document.createElement("img");
            imgRetroKit.setAttribute("src", sessionStorage.getItem("RetroKit"));
            derzeitigAuswahl.appendChild(imgRetroKit);
            let imgLoopKit = document.createElement("img");
            imgLoopKit.setAttribute("src", sessionStorage.getItem("LoopKit"));
            derzeitigAuswahl.appendChild(imgLoopKit);
        }
    }
})(Aufgabe_2_5 || (Aufgabe_2_5 = {}));
//# sourceMappingURL=auswahlscript.js.map