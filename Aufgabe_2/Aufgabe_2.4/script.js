"use strict";
var Aufgabe_2_4;
(function (Aufgabe_2_4) {
    Aufgabe_2_4.nummerDrumKit = 0;
    Aufgabe_2_4.nummerRetroKit = 0;
    Aufgabe_2_4.nummerLoopKit = 0;
    Aufgabe_2_4.auswahl = { DrumKit: undefined, RetroKit: undefined, LoopKit: undefined };
    let bildDiv = document.getElementById("auswahlButtons");
    let drumKitButton = document.createElement("button");
    drumKitButton.id = "DrumKit";
    drumKitButton.innerHTML = "DrumKit";
    bildDiv.appendChild(drumKitButton);
    drumKitButton.addEventListener("click", openDrumKit);
    let retroKitButton = document.createElement("button");
    retroKitButton.id = "RetroKit";
    retroKitButton.innerHTML = "RetroKit";
    retroKitButton.addEventListener("click", openRetroKit);
    bildDiv.appendChild(retroKitButton);
    let loopKitButton = document.createElement("button");
    loopKitButton.id = "LoopKit";
    loopKitButton.innerHTML = "LoopKit";
    loopKitButton.addEventListener("click", openLoopKit);
    bildDiv.appendChild(loopKitButton);
    function openDrumKit() {
        window.open("auswahlDrumKit.html", "_self");
        console.log("auswahlDrumKit");
    }
    function openRetroKit() {
        window.open("auswahlRetroKit.html", "_self");
        console.log("auswahlDrumKit");
    }
    function openLoopKit() {
        window.open("auswahlLoopKit.html", "_self");
        console.log("auswahlDrumKit");
    }
})(Aufgabe_2_4 || (Aufgabe_2_4 = {}));
//# sourceMappingURL=script.js.map