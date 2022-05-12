/* let memeoria[]= */
let mostrarArchivo = [];

document.getElementById("file").onchange = function () {
  console.log("hola");

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
    var textoCelda = document.createTextNode(i+1);
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
}
