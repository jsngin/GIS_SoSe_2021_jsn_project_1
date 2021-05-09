"use strict";
var Aufgabe01;
(function (Aufgabe01) {
    document.addEventListener("DomContentLoaded", function () {
        const newrec = document.getElementById("newrec");
        const recContainer = document.querySelector(".recContainer");
        const reload = document.getElementById("reload");
        class Rectangle {
            createRandomRec() {
                this.width = Math.floor(Math.random() * 100 + 20);
                this.height = Math.floor(Math.random() * 100 + 20);
            }
            drawRandom(rec) {
                let x = Math.floor(Math.random() * 700);
                let y = Math.floor(Math.random() * 300 + 100);
                let recDiv = document.createElement("div");
                recDiv.style.width = rec.width + "px";
                recDiv.style.height = rec.height + "px";
                recDiv.style.top = y + "px";
                recDiv.style.left = x + "px";
                recDiv.style.position = "asbolute";
                recDiv.style.backgroundColor = "green";
                recContainer.appendChild(recDiv);
            }
        }
        function addnewRec() {
            let rec = new Rectangle();
            rec.createRandomRec();
            rec.drawRandom(rec);
        }
        function clearRecContainer() {
            recContainer.innerHTML = "";
        }
        newrec.addEventListener("click", addnewRec);
        reload.addEventListener("click", clearRecContainer);
    });
})(Aufgabe01 || (Aufgabe01 = {}));
//# sourceMappingURL=script.js.map