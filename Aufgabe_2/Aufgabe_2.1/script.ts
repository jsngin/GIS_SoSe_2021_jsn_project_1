// Aufgabe 1 - Basics

function a1(): void {
  let x: string = "Alles";
        
  console.log(x);

  funca();
  funcb();
  funcc();
  funcb();
  console.log("Logo!");
}

a1();

function funca(): void {
  console.log("Gute!");
}

function funcb(): void {
  console.log("Alles");
}
function funcc(): void {
  console.log("Klar?");
}
      // a.)Folgendes muss die Konsole ausgeben: Alles Klar? Logo!
      // a.)Zulässige Variablennamen dürfen nicht mit einer Ziffer beginnen oder ein - enthalten. Zudem dürfen keine Schlüsselwörter verwendet werden (z.B. var, let, etc.) Verwendet werden dürfen Ziffern 0-9, Buchstaben a-z,A-Z sowie die Zeichen _ und $.

      // b.) Er springt direkt auf Zeile 12. Die Reihenfolge der Funktionen ist nun folgende: 1. console.log(x); 2. onsole.log("Klar?"); 3. console.log("Logo!");

// Aufagabe 2 - Kontinuierliche Variablenmanipulation
function a2(): void {
  let i: number = 9;

  do {
      console.log(i);
      i = i - 1;
  } while ( i > 0);
}

a2();
      //i wird immer wieder in der do-while-SChleife mit -1 berechnet,
      //bis i>0 nicht mehr zutrifft und es wird jedes mal der aktuelle i-Wert in der Konsole ausgegeben

// Aufgabe 3 - Fehler erkennen und vermeiden lernen.
      // Fehler erkennen, beheben, in zukunft umgehen.

// Aufgabe 4 - Gobal vs Lokal

let x: string = "Hallo";
console.log(x);
func1(x);
console.log(x);
func2();
func3();
console.log(x);

function func1(y: string): void {
    y = "Bla";
    console.log(y);
}

function func2(): void {
    let x: string = "Blubb";
    console.log(x);
}

function func3(): void {
    x = "Test";
}

/* a.)
  Die Ausgabe wird folgende sein: Hallo <br> Bla <br> Hallo <br> Blubb <br> Test

  b.)
  Globale Variablen: Sind von jeder beliebigen Stelle im gesamten Programm aus lesbar und überschreibar.
  Lokale Variablen: Können nicht mehr verändert werden und man hat keinen Zugriff auserhalb des Programms.
  Übergabeparametern: Werden als Wert übergeben und als Kopie bereitgestellt wie z.B bei Methoden
*/ 

// Aufgabe 5 - Schleifen, Funktionen und andere Kontrollstrukturen

// a.)
function multiply(): void {
  let a: number = 2;
  let b: number = 3;
  console.log(a * b);
}

// b.)
function max(): void {
  let a: number = 11;
  let b: number = 8;
  if (a < b) {
    console.log(b);
  }
  if (a > b) {
    console.log(a);
  }
}

// c.)
function addition(): void {
  let a: number = 0;
  let b: number = 0;
  while (a < 100) {
    a++;
    b = b + a;
  } 
  console.log(b);
}

// d.)
function random(): void {
  let a: number = 0;
  for (a; a < 10; a++) {
    Math.floor(Math.random() * 100);
    console.log(Math.floor(Math.random() * 100));
  }
}

// e.)
function factorial(x: number): number {
  let y: number = 1;
  let z: number = x;
  if (x < 1) {
      return 1;
  } else {
      for (let i: number = 1; i <= x; i++) {
          y = y * z;
          z--;
      }
      return y;
  }
}
console.log(factorial(6));


//f
function leapyears(): void {
  let jahr: number = 1900;
  for (let i: number = 0; jahr + i <= 2021; i++) {
      let schalt: number = jahr + i;
      if (schalt % 4 == 0 && schalt % 100 != 0) {
          console.log(schalt);
      }
      if (schalt % 400 == 0) {
          console.log(schalt);
      }
  }
}
leapyears();

// Aufgabe 6 - Mehr Schleifen und Funktionen

// a.)
let string: string = "#";
for (let zaehler: number = 1 ; zaehler < 8 ; zaehler++) {


    console.log(string);

    string = string + "#";
    }

    // b.) & c.)
for (let zaehler: number = 1 ; zaehler <= 100 ; zaehler++) {

      if (zaehler % 3 == 0 && zaehler % 5 != 0) {console.log("Fizz"); }
        else if (zaehler % 5 == 0 && zaehler % 3 != 0) {console.log("Buzz"); }
        else if (zaehler % 5 == 0 && zaehler % 3 == 0) {console.log("FizzBuzz"); }
    
        else {console.log(zaehler); }
           }

    // d.) & e.)
function schach(x: number, y: number): String {

      let string: String = "";
  
      for (let zaehler1: number = 0 ; zaehler1 < x; zaehler1++) {
          for (let zaehler2: number = 0; zaehler2 < y ; zaehler2++) {
              if (zaehler1 % 2 == zaehler2 % 2) {
                 string = string + "#"; }
                 else (string = string + " ");
          }
          string = string + "\n";
  
      }
      return string;
  
      }
console.log(schach(15, 20));
  