"use strict";
var Aufgabe_2_5;
(function (Aufgabe_2_5) {
    Aufgabe_2_5.nummerDrumKit = 0;
    Aufgabe_2_5.nummerRetroKit = 1;
    Aufgabe_2_5.nummerLoopKit = 2;
    Aufgabe_2_5.auswahl = { DrumKit: undefined, RetroKit: undefined, LoopKit: undefined };
    let bildDiv = document.getElementById("auswahlButtons");
    let drumKitButton = document.createElement("button");
    drumKitButton.id = "DrumKit";
    drumKitButton.innerHTML = "DrumKit";
    bildDiv.appendChild(drumKitButton);
    drumKitButton.addEventListener("click", openDrumKit);
    function openDrumKit() {
        window.open("auswahlDrumKit.html");
        console.log("auswahlDrumKit");
    }
})(Aufgabe_2_5 || (Aufgabe_2_5 = {}));
//# sourceMappingURL=script.js.map