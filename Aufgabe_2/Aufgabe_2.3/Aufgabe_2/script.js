"use strict";
var Aufgabe02;
(function (Aufgabe02) {
    const displayarea = document.getElementById("displayarea");
    class Person {
        setHead(_head) {
            this.head = _head;
        }
        setBody(_body) {
            this.body = _body;
        }
        setLegs(_legs) {
            this.legs = _legs;
        }
        setName(_name) {
            this.name = _name;
        }
    }
    let person = new Person();
    for (let i = 0; i < productsPics.length; i++) {
        const imgElem = document.createElement("img");
        imgElem.src = productsPics[i];
        imgElem.className = "products";
        imgElem.id = String(i + 1);
        displayarea.appendChild(imgElem);
    }
    const optionsHead = document.querySelectorAll(".products");
    function highlightSelection(element) {
        optionsHead.forEach(element => {
            element.style.border = "3px solid transparent";
            element.style.boxShadow = "2px 3px 7px black";
        });
        element.style.border = "4px solid #000";
        element.style.boxShadow = "3px 4px 7px ";
    }
    optionsHead.forEach(element => {
        element.addEventListener("click", function () {
            person.setHead(element.id);
            highlightSelection(element);
            console.log(person.head);
        });
    });
})(Aufgabe02 || (Aufgabe02 = {}));
//# sourceMappingURL=script.js.map