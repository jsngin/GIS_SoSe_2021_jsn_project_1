"use strict";
var Aufgabe_2_5;
(function (Aufgabe_2_5) {
    Aufgabe_2_5.nummerDrumKit = 0;
    Aufgabe_2_5.nummerretrokit = 1;
    Aufgabe_2_5.nummerLoopKit = 2;
    Aufgabe_2_5.auswahl = { drumkit: undefined, retrokit: undefined, loopkit: undefined };
    let bildDiv = document.getElementById("auswahlButtons");
    let drumkitButton = document.createElement("button");
    drumkitButton.id = "DrumKit";
    drumkitButton.innerHTML = "DrumKit";
    bildDiv.appendChild(drumkitButton);
    drumkitButton.addEventListener("click", openDrumKit);
    function openDrumKit() {
        window.open("auswahlDrumKit.html", "_self");
        console.log("auswahlDrumKit");
    }
})(Aufgabe_2_5 || (Aufgabe_2_5 = {}));
//# sourceMappingURL=script.js.map