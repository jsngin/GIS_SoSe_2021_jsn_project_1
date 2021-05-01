namespace P2_2 {
//Aufgabe 1 - Mehr "langweilige" Konsolenausgaben
// a.)
function min(...args: number[]): number {
return Math.min.apply(Math, args);
}

// b.)
function isEven ( n: number ): boolean {
if (n == 0)
  return true;
if (n == 1)
  return false;
if (n < 0)
  return isEven (-n);
else
  return isEven(n - 2);
}

// c.)
interface Student {
  nameStudent: String;
  matrikelnummer: number;
  studiengang: String;
}
let st1: Student = { 
  nameStudent: "Jason",
  matrikelnummer: 78120,
  studiengang: "MIB"
};
let st2: Student = { 
  nameStudent: "Nicole",
  matrikelnummer: 79713,
  studiengang: "MKB"
};
let st3: Student = { 
  nameStudent: "Aydin",
  matrikelnummer: 17443,
  studiengang: "OMB"
};

let st: Array<Student> = ["nameStudent", matrikelnummer, "studiengang"];
const stA = { nameStudent: "", matrikelnummer: "",  studiengang: "" };

console.log(stA);    

// Aufgabe 2 - Arrays
// a.)

//number.backwards();
// b.)
// c.)

//Aufgabe 3 - Endlich was visuelles!
//a.)

let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("myFirstCanvas");
let context: CanvasRenderingContext2D = canvas.getContext("2d");
}