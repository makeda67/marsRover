var orden = null;

function sub() {
  orden = document.getElementById("mov").value;
  commands(orden);
}

var boardWithObstacles = [
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, 1, 1, 1, 1, 1, null, null, null],
  [null, null, 1, 1, 1, 1, 1, null, null, null],
  [null, null, 1, 1, 1, 1, 1, null, null, null],
  [null, null, 1, 1, 1, 1, 1, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null]
];
/*

Hacer grid con 
Math.floor(x)

for loop 10 veces para generar el tablero 10x10
Math.random para generar numeros del 0 al 10 y if es menor que 8 resultado empty
else por encima de 8 generar objeto.

function grid(boardWithObstacles){
  var 
}

*/



function commands(orden){
  var marsRover = new Object();
  marsRover.direccion = "N";
  marsRover.posicionX = 0;
  marsRover.posicionY = 0;
  marsRover.travelLog = [];
  boardWithObstacles[marsRover.posicionX][marsRover.posicionY] = "R";
  
  var x=0;
    while (x <= orden.length) {
      console.log("posición del string" + x);
      switch (orden.charAt(x)) {
        case "r":
          console.log("Leyendo comando: " + orden.charAt(x));
          turnRight(marsRover);
        break;
        case "l":
            console.log("Leyendo comando: " + orden.charAt(x));
          turnLeft(marsRover);
        break;
        case "f":
            console.log("Leyendo comando: " + orden.charAt(x));
          moveForward(marsRover);
        break;
        case "b":
            console.log("Leyendo comando: " + orden.charAt(x));
          moveBackwards(marsRover);
        break;
      }
    x++;
    }
    //función giro left
  function turnLeft(marsRover){
    console.log("turnLeft was called!");
    console.log("Dirección original "+marsRover.direccion);
    switch (marsRover.direccion) {
      case "N":
        marsRover.direccion = "W";
        break;
      case "W":
        marsRover.direccion = "S";
        break;
      case "S":
          marsRover.direccion = "E";
        break;
      case "E":
          marsRover.direccion = "N";
        break;
        
    }console.log("Dirección nueva "+ marsRover.direccion);
  }
  //función giro right
  function turnRight(marsRover){
    console.log("turnRight was called!");
    console.log("Dirección original: "+marsRover.direccion);
    switch (marsRover.direccion) {
    case "N":
        marsRover.direccion = "E";
        break;
      case "E":
        marsRover.direccion = "S";
        break;
        case "S":
          marsRover.direccion = "W";
        break;
      case "W":
          marsRover.direccion = "N";
        break;
    }console.log("Dirección nueva "+ marsRover.direccion);
  }
  //función movimiento
  function moveForward(marsRover){
    console.log("moveForward was called");
    console.log("Dirección original "+marsRover.direccion);
    marsRover.travelLog.push("(" + marsRover.posicionX + " , " + marsRover.posicionY + ")");
    switch (marsRover.direccion) {
      case "N":
        if (marsRover.posicionY === 0) {
          console.log("Fuera del tablero");
        }
        else {
          if(boardWithObstacles[marsRover.posicionX-1][marsRover.posicionY] === null) {
            marsRover.posicionX = marsRover.posicionX-1; 
          }
          
          else {
            console.log("Esta posición está ocupada");
          }
        }
        break;

      case "S":
        if (marsRover.posicionY === 10) {
          console.log("Fuera del tablero");
        }

        else { 
          if (boardWithObstacles[marsRover.posicionX+1][marsRover.posicionY] === null) {
            marsRover.posicionX = marsRover.posicionX+1;
          }
          else {
            console.log("Esta posición está ocupada");
          }
        }
        break; 

      case "W":
        if (marsRover.posicionX === 0) {
          console.log("Fuera del tablero");
        }
        else { 
          if (boardWithObstacles[marsRover.posicionX] [marsRover.posicionY-1]=== null) {
          marsRover.posicionY = marsRover.posicionY-1;
        }
        else {
          console.log("Esta posición está ocupada");
        }
        }
      break;

      case "E":
        if (marsRover.posicionX === 10) {
          console.log("fuera del tablero");
        }
      else { 
        if (boardWithObstacles[marsRover.posicionX][marsRover.posicionY+1] === null) {
        marsRover.posicionY = marsRover.posicionY+1;
      }
      else {
        console.log("Esta posición está ocupada")
      }
    }
      break;
    }console.log("Dirección nueva "+ marsRover.direccion);
  }

  function moveBackwards(marsRover){
    console.log("moveBackwards was called");
    console.log("Dirección original "+marsRover.direccion);
    marsRover.travelLog.push("(" + marsRover.posicionX + " , " + marsRover.posicionY + ")");
    switch (marsRover.direccion) {
      case "N":
        if (marsRover.posicionY === 10) {
          console.log("Fuera del tablero");
        }
        else { 
          
          if (boardWithObstacles[marsRover.posicionX-1][marsRover.posicionY] === null) {
            marsRover.posicionX = marsRover.posicionX-1;
          }

          else {
            console.log("Esta posición está ocupada");
          }
        }
        break;

      case "S":
        if (marsRover.posicionY === 0) {
          console.log("Fuera del tablero");
        }
        else { 
          
          if (boardWithObstacles[marsRover.posicionX+1][marsRover.posicionY] === null) {
            marsRover.posicionX = marsRover.posicionX+1;
          }
          
          else {
            console.log("Esta posición está ocupada");
          }
        }
        break;

      case "W":
        if (marsRover.posicionX === 10) {
          console.log("Fuera del tablero");
        }
        else { 
          if(boardWithObstacles[marsRover.posicionX][marsRover.posicionY-1] === null) { 
            marsRover.posicionY = marsRover.posicionY-1;
          }

          else {
            console.log("Esta posición está ocupada");
          }
        }
      break;

      case "E":
        if (marsRover.posicionX === 0) {
          console.log("fuera del tablero");
        }
      else { 
        if (boardWithObstacles[marsRover.posicionX][marsRover.posicionY+1] === null) {
          marsRover.posicionY = marsRover.posicionY+1;
        }
        else {
          console.log("Esta posición está ocupada");
        }
      break;
    }
  }
    console.log("Dirección nueva "+ marsRover.direccion);
  }

  // Lectura del travelLog
  var i=0;
  while (i < marsRover.travelLog.length) {
    console.log(`Estas son las posiciones por las que ha pasado el Rover: Posición ${i} - ${marsRover.travelLog[i]}`);
   i++; 
   }
  console.log(boardWithObstacles);
  }
  
