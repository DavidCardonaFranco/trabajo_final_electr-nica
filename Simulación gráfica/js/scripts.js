/* let memeoria[]= */
let mostrarArchivo = [];
let registros = [
  "eax,",
  "edx,",
  "variableA"
];

document.getElementById("file").onchange = function () {
  var file = this.files[0];
  var reader = new FileReader();
  reader.onload = function (progressEvent) {
    mostrarArchivo = this.result.split(/\r\n|\n/);
    /* for (var line = 0; line < fileContentArray.length; line++) {

      mostrarArchivo.push(fileContentArray[line]);
      console.log(line + " --> " + fileContentArray[line]);
    } */
  };
  reader.readAsText(file);
};

function genera_tabla() {
  // Obtener la referencia del elemento body
  var tablaDinamica = document.getElementById("tablaDinamica");
  // Crea un elemento <table> y un elemento <tbody>
  var tabla = document.createElement("table");
  var tblBody = document.createElement("tbody");


  // Crea las celdas
  for (var i = 0; i < mostrarArchivo.length; i++) {
    // Crea las hileras de la tabla
    var hilera = document.createElement("tr");

    var celda = document.createElement("td");
    var textoCelda = document.createTextNode(i + 1);
    celda.appendChild(textoCelda);
    hilera.appendChild(celda);

    var celda = document.createElement("td");
    var textoCelda = document.createTextNode(mostrarArchivo[i]);
    celda.appendChild(textoCelda);
    hilera.appendChild(celda);

    // agrega la hilera al final de la tabla (al final del elemento tblbody)
    tblBody.appendChild(hilera);
  }

  
  // posiciona el <tbody> debajo del elemento <table>
  tabla.appendChild(tblBody);
  // appends <table> into <body>
  tablaDinamica.appendChild(tabla);
  // modifica el atributo "border" de la tabla y lo fija a "2";
  tabla.setAttribute("border", "2");

  for (let i = 0; i < mostrarArchivo.length; i++) {
    const element = mostrarArchivo[i].split(" ");
    switch (verificarInstruccion(element[0])) {
      case 1:
        if (element.length == 2) {
          if (verificarRegistro(element[1])) {
            console.log("Los registros existen");
          } else {
            console.log("Los registros no existen, se generará un "+element[1]);
          }
        } else {
          console.log("Está mal escroto, sobran parámetros");
        }
        break;
      case 2:
        if (element.length == 3) {
          if (verificarRegistro(element[1]) &&verificarRegistro(element[2])
          ) {
            console.log("Los registros existen");
          } else {
            console.log("Los registros no existen, se generará un "+element[2]);
          }
        } else {
          console.log("Está mal escroto, sobran parámetros");
        }

        break;
      case 0:
        console.log("Está mal escroto, faltan parámetros");
        break;
    }
  }
}

function genera_tabla2() {
  
}

function verificarInstruccion(instruccion) {
  switch (instruccion) {
    case "mov":
      console.log("mov")
      return 2;
      break;
    case "add":
      console.log("add")
      return 2;
      break;
    case "sub":
      console.log("sub")
      return 2;
      break;
    case "mul":
      console.log("mul")
      return 1;
      break;
    case "div":
      console.log("div")
      return 1;
      break;
    case "and":
      console.log("and")
      return 2;
      break;
    case "or":
      console.log("or")
      return 2;
      break;
    case "xor":
      console.log("xor")
      return 2;
      break;
    case "not":
      console.log("not")
      return 2;
      break;

    default:
      console.log("no soy nada :C")
      return 0;
      break;
  }
}

function verificarRegistro(registro) {
  for (let i = 0; i < registros.length; i++) {
    if (registro == registros[i]) {
      return true;
    }
    
  }
  return false
}
