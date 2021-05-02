namespace P2_2 {
  //Aufgabe 1 - Mehr "langweilige" Konsolenausgaben
  // a.)
  function min(...args: number[]): number {
  return Math.min.apply(Math, args);
  }
  console.log(min(3, 9, 11, 33, 42));
  
  
  
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
  console.log(isEven(50));
  console.log(isEven(75));
  console.log(isEven(-1));
  
  // c.)
  interface Student {
    nameStudent: String;
    matrikelnummer: number;
    studiengang: String;
  }
  let p1: Student = { 
    nameStudent: "Jason",
    matrikelnummer: 78120,
    studiengang: "MIB"
  };
  let p2: Student = { 
    nameStudent: "Nicole",
    matrikelnummer: 79713,
    studiengang: "MKB"
  };
  let p3: Student = { 
    nameStudent: "Aydin",
    matrikelnummer: 17443,
    studiengang: "OMB"
  };
  
  let p: Array<Student> = [
    {"nameStudent": "Jason", "matrikelnummer": 78120, "studiengang": "MIB"},
    {"nameStudent": "Nicole", "matrikelnummer": 79713, "studiengang": "MKB"},
    {"nameStudent": "Aydin", "matrikelnummer": 17443, "studiengang": "OMB"}
  ];
  console.log(p1);
  console.log(p2);
  console.log(p3);
       
  
  // Aufgabe 2 - Arrays
  // a.)
  const array = ["one", "two", "three"];
  console.log("array:", array);
  // output: "array:" Array ["one", "two", "three"]
  
  const reversed = array.reverse();
  console.log("reversed:", reversed);
  // output: "reversed:" Array ["three", "two", "one"]
  
  // destructiv reverse
  console.log("array:", array);
  // output: "array1:" Array ["three", "two", "one"]
  
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
  // output: array ["nachts ist es kälter als draußen."]
  
  //Aufgabe 3 - Endlich was visuelles!
  //a.)
  
  let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("firstone");
  let context: CanvasRenderingContext2D = canvas.getContext("2d");
  context.fillStyle = "lightblue";  //sky
  context.fillRect(0, 0, 500, 400); //x y pos sky
  context.fillStyle = "lightgreen";   //gras
  context.fillRect(0, 250, 500, 300);

  context.beginPath();    //cloud
  context.fillStyle = "white";
  context.arc(240, 85, 35, 0, Math.PI * 2);
  context.fill();
  
  context.beginPath();    //cloud
  context.fillStyle = "white";
  context.arc(270, 75, 40, 0, Math.PI * 2);
  context.fill();
  
  context.beginPath();    //cloud
  context.fillStyle = "white";
  context.arc(285, 80, 35, 0, Math.PI * 2);
  context.fill();
  
  context.beginPath();    //cloud1
  context.fillStyle = "white";
  context.arc(35, 60, 20, 0, Math.PI * 2);
  context.fill();
  
  context.beginPath();    //cloud1
  context.fillStyle = "white";
  context.arc(80, 44, 25, 0, Math.PI * 2);
  context.fill();
  
  context.beginPath();    //cloud1
  context.fillStyle = "white";
  context.fill();

  context.arc(55, 60, 25, 0, Math.PI * 2);
  context.beginPath();   //trunk
  context.lineWidth = 2.5;
  context.fillStyle = "brown";
  context.moveTo(170, 210);
  context.lineTo(150, 300);
  context.lineTo(210, 300);
  context.lineTo(190, 210);
  context.lineTo(170, 210);
  context.stroke();
  context.fill();
  
  context.beginPath();    //leaves
  context.lineWidth = 1;
  context.strokeStyle = "black";
  context.fillStyle = "green";
  context.arc(160, 210, 30, 0, Math.PI * 2);
  context.fill();
  context.stroke();
  
  context.beginPath();    //leaves
  context.lineWidth = 1;
  context.strokeStyle = "black";
  context.fillStyle = "green";
  context.arc(180, 180, 30, 0, Math.PI * 2);
  context.fill();
  context.stroke();
  
  context.beginPath();    //leaves
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
  
  context.beginPath();    //roof
  context.fillStyle = "red";
  context.moveTo(280, 140);
  context.lineTo(380, 60);
  context.lineTo(480, 140);
  context.closePath();
  context.fill();
  context.stroke();
  
  console.log(canvas);
  }