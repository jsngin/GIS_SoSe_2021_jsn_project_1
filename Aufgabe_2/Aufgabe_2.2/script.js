"use strict";
var P2_2;
(function (P2_2) {
    //Aufgabe 1 - Mehr "langweilige" Konsolenausgaben
    // a.)
    function min(...args) {
        return Math.min.apply(Math, args);
    }
    console.log(min(3, 9, 11, 33, 42));
    // b.)
    function isEven(n) {
        if (n == 0)
            return true;
        if (n == 1)
            return false;
        if (n < 0)
            return isEven(-n);
        else
            return isEven(n - 2);
    }
    console.log(isEven(50));
    console.log(isEven(75));
    console.log(isEven(-1));
    let p1 = {
        nameStudent: "Jason",
        matrikelnummer: 78120,
        studiengang: "MIB"
    };
    let p2 = {
        nameStudent: "Nicole",
        matrikelnummer: 79713,
        studiengang: "MKB"
    };
    let p3 = {
        nameStudent: "Aydin",
        matrikelnummer: 17443,
        studiengang: "OMB"
    };
    let p = [
        { "nameStudent": "Jason", "matrikelnummer": 78120, "studiengang": "MIB" },
        { "nameStudent": "Nicole", "matrikelnummer": 79713, "studiengang": "MKB" },
        { "nameStudent": "Aydin", "matrikelnummer": 17443, "studiengang": "OMB" }
    ];
    p = [];
    p.push(p1, p2, p3);
    function addStudent(nameStudent, matrikelnummer, studiengang) {
        let p4 = { nameStudent, matrikelnummer, studiengang };
        p.push(p4);
    }
    addStudent("Verinoka", 20221, "MKB");
    showInfo(20221);
    function showInfo(matrikelnummer) {
        for (let i = 0; i < p.length; i++) {
            if (matrikelnummer == p[i].matrikelnummer) {
                console.log(p[i].nameStudent, p[i].matrikelnummer, p[i].studiengang);
                return true;
            }
        }
        console.log("student not found");
        return false;
    }
    addStudent("Slavik", 336699, "OMB");
    showInfo(336699);
    showInfo(78120);
    showInfo(79713);
    showInfo(17443);
    // Aufgabe 2 - Arrays
    // a.)
    const array = ["one", "two", "three"];
    console.log("array:", array);
    // output: "array:" ["one", "two", "three"]
    const reversed = array.reverse();
    console.log("reversed:", reversed);
    // output: "reversed:" ["three", "two", "one"]
    // destructiv reverse
    console.log("array:", array);
    // output: ["three", "two", "one"]
    // b.)
    const elements = ["mic", "check_one"];
    console.log(elements.join());
    // output: "mic, checkone"
    // c.)
    const str = "nachts ist es kälter als draußen.";
    const word = str.split(" ");
    console.log(word[3]);
    // output: "es"
    const chars = str.split("");
    console.log(chars[8]);
    // output: "s"
    const strCopy = str.split(" ");
    console.log(strCopy);
    // output: ["nachts ist es kälter als draußen."]
    //Aufgabe 3 - Endlich was visuelles!
    //a.)
    let canvas = document.getElementById("firstone");
    let context = canvas.getContext("2d");
    context.fillStyle = "lightblue"; //sky
    context.fillRect(0, 0, 500, 400); //x y pos sky
    context.fillStyle = "lightgreen"; //gras
    context.fillRect(0, 250, 500, 300);
    context.beginPath(); //cloud
    context.fillStyle = "white";
    context.arc(240, 85, 35, 0, Math.PI * 2);
    context.fill();
    context.beginPath(); //cloud
    context.fillStyle = "white";
    context.arc(270, 75, 40, 0, Math.PI * 2);
    context.fill();
    context.beginPath(); //cloud
    context.fillStyle = "white";
    context.arc(285, 80, 35, 0, Math.PI * 2);
    context.fill();
    context.beginPath(); //cloud1
    context.fillStyle = "white";
    context.arc(35, 60, 20, 0, Math.PI * 2);
    context.fill();
    context.beginPath(); //cloud1
    context.fillStyle = "white";
    context.arc(80, 44, 25, 0, Math.PI * 2);
    context.fill();
    context.beginPath(); //cloud1
    context.fillStyle = "white";
    context.fill();
    context.arc(55, 60, 25, 0, Math.PI * 2);
    context.beginPath(); //trunk
    context.lineWidth = 2.5;
    context.fillStyle = "brown";
    context.moveTo(170, 210);
    context.lineTo(150, 300);
    context.lineTo(210, 300);
    context.lineTo(190, 210);
    context.lineTo(170, 210);
    context.stroke();
    context.fill();
    context.beginPath(); //leaves
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.fillStyle = "green";
    context.arc(160, 210, 30, 0, Math.PI * 2);
    context.fill();
    context.stroke();
    context.beginPath(); //leaves
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.fillStyle = "green";
    context.arc(180, 180, 30, 0, Math.PI * 2);
    context.fill();
    context.stroke();
    context.beginPath(); //leaves
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.fillStyle = "green)";
    context.arc(200, 210, 30, 0, Math.PI * 2);
    context.fill();
    context.stroke();
    context.lineWidth = 0.5; //house
    context.fillStyle = "orange";
    context.fillRect(305, 140, 150, 110);
    context.fillStyle = "red";
    context.fillRect(330, 190, 40, 60);
    context.fillRect(400, 150, 30, 30);
    context.beginPath(); //roof
    context.fillStyle = "red";
    context.moveTo(280, 140);
    context.lineTo(380, 60);
    context.lineTo(480, 140);
    context.closePath();
    context.fill();
    context.stroke();
    console.log(canvas);
    function getRandom(max) {
        return Math.floor(Math.random() * max);
    }
    function createRect() {
        let x = getRandom(500);
        let w = getRandom(500);
        let y = getRandom(400);
        let h = getRandom(400);
        context.fillRect(x, y, w, h);
    }
    createRect();
    class Rectangle {
        createRectangle(_width, _height) {
            this.width = _width;
            this.height = _height;
        }
        createRandomRec() {
            this.width = Math.floor(Math.random() * 100);
            this.height = Math.floor(Math.random() * 100);
        }
        drawRectangle(x, y, fill, color) {
            let c = "yellow";
            context.beginPath();
            context.rect(x, y, this.width, this.height);
            if (color) {
                context.fillStyle = color;
                context.strokeStyle = color;
            }
            else {
                context.fillStyle = c;
                context.strokeStyle = c;
            }
            if (fill) {
                context.fill();
            }
            context.stroke();
        }
        drawRandom() {
            let x = Math.floor(Math.random() * 500);
            let y = Math.floor(Math.random() * 500);
            context.beginPath();
            context.rect(x, y, this.width, this.height);
            context.fillStyle = "purple";
            context.strokeStyle = "grey";
            context.fill();
            context.stroke();
        }
    }
    const r = new Rectangle();
    r.createRectangle(300, 300);
    r.drawRectangle(300, 650, true);
    const r1 = new Rectangle();
    r1.createRandomRec();
    r1.drawRectangle(250, 650, false);
    const r2 = new Rectangle();
    r2.createRandomRec();
    r2.drawRectangle(500, 750, true, "blue)");
    const r3 = new Rectangle();
    r3.createRandomRec();
    const r4 = new Rectangle();
    r4.createRandomRec();
    const r5 = new Rectangle();
    r5.createRandomRec();
    let rectangles = new Array();
    rectangles = [r3, r4, r5];
    rectangles.forEach(rec => rec.drawRandom());
})(P2_2 || (P2_2 = {}));
//# sourceMappingURL=script.js.map