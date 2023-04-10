/*
Aclarar que solo sirve por ahorra para opciones multiples
Si en tu cuestionario el usuario contesta todas las opciones multiples
Aun no funciona del todo xd
*/
function exportarFroms() {
  // Extraer Info de Sheets
  var libro = SpreadsheetApp.getActiveSpreadsheet();
  var hoja = libro.getSheetByName("ENCUESTA_GENERAL");
  var lastItem = hoja.getLastRow();

  // Obtener formulario
  var formulario = FormApp.openById(
    "1cO9jTr2QjynoRpjr5e7mhj5wGY4lYF36mjXZJxmlSmY"
  );

  // Iterar a través de las filas de la hoja
  for (var i = 2; i <= lastItem; i++) {
    var respuestas = [];

    // Iterar a través de las columnas para obtener las respuestas
    for (var j = 1; j <= 28; j++) {
      var pregunta = hoja.getRange(i, j).getValue();
      if (pregunta !== "") {
        var preguntaId = j - 1; // Id de la pregunta en el formulario
        var preguntaItem = formulario.getItemById("1" + preguntaId); // Obtener el item de la pregunta
        var respuesta = preguntaItem
          .asMultipleChoiceItem()
          .createResponse(pregunta); // Crear la respuesta
        respuestas.push(respuesta);
      }
    }

    // Crear la respuesta del formulario
    var response = formulario.createResponse();
    for (var k = 0; k < respuestas.length; k++) {
      response.withItemResponse(respuestas[k]);
    }
    response.submit(); // Envíar la respuesta al formulario
  }
}
