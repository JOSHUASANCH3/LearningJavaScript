/*
Aclarar que solo sirve por ahorra para opciones multiples
Si en tu cuestionario el usuario deja opciones vacias, solo dejar comentariada las celdas
*/
function exportarFroms() {
  //Extraer Info de Sheets
  var libro = SpreadsheetApp.getActiveSpreadsheet();
  var hoja = libro.getSheetByName("ENCUESTA_GENERAL");
  //var Edad = hoja.getRange(2,1).getValue() - para items individuales
  var lastItem = hoja.getLastRow();
  for (var i = 2; i <= lastItem; i++) {
    var pregunta_1 = hoja.getRange(i, 1).getValue().toString();
    var pregunta_2 = hoja.getRange(i, 2).getValue();
    var pregunta_3 = hoja.getRange(i, 3).getValue();
    var pregunta_4 = hoja.getRange(i, 4).getValue();
    var pregunta_5 = hoja.getRange(i, 5).getValue();
    var pregunta_6 = hoja.getRange(i, 6).getValue();
    var pregunta_7 = hoja.getRange(i, 7).getValue().toString();
    var pregunta_8 = hoja.getRange(i, 8).getValue();
    var pregunta_9 = hoja.getRange(i, 9).getValue();
    var pregunta_10 = hoja.getRange(i, 10).getValue();
    var pregunta_11 = hoja.getRange(i, 11).getValue();
    var pregunta_12 = hoja.getRange(i, 12).getValue();
    var pregunta_13 = hoja.getRange(i, 13).getValue();
    var pregunta_14 = hoja.getRange(i, 14).getValue();
    var pregunta_15 = hoja.getRange(i, 15).getValue();
    var pregunta_16 = hoja.getRange(i, 16).getValue();
    var pregunta_17 = hoja.getRange(i, 17).getValue();
    var pregunta_18 = hoja.getRange(i, 18).getValue();
    var pregunta_19 = hoja.getRange(i, 19).getValue();
    var pregunta_20 = hoja.getRange(i, 20).getValue();
    var pregunta_21 = hoja.getRange(i, 21).getValue();
    var pregunta_22 = hoja.getRange(i, 22).getValue();
    var pregunta_23 = hoja.getRange(i, 23).getValue();
    var pregunta_24 = hoja.getRange(i, 24).getValue();
    var pregunta_25 = hoja.getRange(i, 25).getValue();
    var pregunta_26 = hoja.getRange(i, 26).getValue();
    var pregunta_27 = hoja.getRange(i, 27).getValue();
    var pregunta_28 = hoja.getRange(i, 28).getValue();
    var formulario = FormApp.openById(
      "1cO9jTr2QjynoRpjr5e7mhj5wGY4lYF36mjXZJxmlSmY"
    );
    //respuetas de variables
    var respuesta = formulario.createResponse();
    //variables de respuestas

    var ask_1 = formulario.getItemById("1876540285");
    var respuesta_1 = ask_1.asMultipleChoiceItem().createResponse(pregunta_1);
    respuesta.withItemResponse(respuesta_1);

    var ask_2 = formulario.getItemById("1628084089");
    var respuesta_2 = ask_2.asMultipleChoiceItem().createResponse(pregunta_2);
    respuesta.withItemResponse(respuesta_2);

    var ask_3 = formulario.getItemById("1382176376");
    var respuesta_3 = ask_3.asMultipleChoiceItem().createResponse(pregunta_3);
    respuesta.withItemResponse(respuesta_3);

    
    var ask_4 = formulario.getItemById("1779993848");
    var respuesta_4 = ask_4.asMultipleChoiceItem().createResponse(pregunta_4);
    respuesta.withItemResponse(respuesta_4);

    var ask_5 = formulario.getItemById("1272522580");
    var respuesta_5 = ask_5.asMultipleChoiceItem().createResponse(pregunta_5);
    respuesta.withItemResponse(respuesta_5);
    

    var ask_6 = formulario.getItemById("219450078");
    var respuesta_6 = ask_6.asMultipleChoiceItem().createResponse(pregunta_6);
    respuesta.withItemResponse(respuesta_6);

    var ask_7 = formulario.getItemById("552371105");
    var respuesta_7 = ask_7.asMultipleChoiceItem().createResponse(pregunta_7);
    respuesta.withItemResponse(respuesta_7);

    var ask_8 = formulario.getItemById("70070789");
    var respuesta_8 = ask_8.asMultipleChoiceItem().createResponse(pregunta_8);
    respuesta.withItemResponse(respuesta_8);

    var ask_9 = formulario.getItemById("436195689");
    var respuesta_9 = ask_9.asMultipleChoiceItem().createResponse(pregunta_9);
    respuesta.withItemResponse(respuesta_9);

    var ask_10 = formulario.getItemById("100055014");
    var respuesta_10 = ask_10
      .asMultipleChoiceItem()
      .createResponse(pregunta_10);
    respuesta.withItemResponse(respuesta_10);

    var ask_11 = formulario.getItemById("1454791489");
    var respuesta_11 = ask_11
      .asMultipleChoiceItem()
      .createResponse(pregunta_11);
    respuesta.withItemResponse(respuesta_11);

    var ask_12 = formulario.getItemById("576761689");
    var respuesta_12 = ask_12
      .asMultipleChoiceItem()
      .createResponse(pregunta_12);
    respuesta.withItemResponse(respuesta_12);

    var ask_13 = formulario.getItemById("443456152");
    var respuesta_13 = ask_13
      .asMultipleChoiceItem()
      .createResponse(pregunta_13);
    respuesta.withItemResponse(respuesta_13);

    var ask_14 = formulario.getItemById("229039");
    var respuesta_14 = ask_14
      .asMultipleChoiceItem()
      .createResponse(pregunta_14);
    respuesta.withItemResponse(respuesta_14);

    var ask_15 = formulario.getItemById("280089631");
    var respuesta_15 = ask_15
      .asMultipleChoiceItem()
      .createResponse(pregunta_15);
    respuesta.withItemResponse(respuesta_15);

    var ask_16 = formulario.getItemById("1783035827");
    var respuesta_16 = ask_16
      .asMultipleChoiceItem()
      .createResponse(pregunta_16);
    respuesta.withItemResponse(respuesta_16);

    var ask_17 = formulario.getItemById("82663386");
    var respuesta_17 = ask_17
      .asMultipleChoiceItem()
      .createResponse(pregunta_17);
    respuesta.withItemResponse(respuesta_17);

    var ask_18 = formulario.getItemById("255011075");
    var respuesta_18 = ask_18
      .asMultipleChoiceItem()
      .createResponse(pregunta_18);
    respuesta.withItemResponse(respuesta_18);

    var ask_19 = formulario.getItemById("490024755");
    var respuesta_19 = ask_19
      .asMultipleChoiceItem()
      .createResponse(pregunta_19);
    respuesta.withItemResponse(respuesta_19);

    var ask_20 = formulario.getItemById("1722135454");
    var respuesta_20 = ask_20
      .asMultipleChoiceItem()
      .createResponse(pregunta_20);
    respuesta.withItemResponse(respuesta_20);

    var ask_21 = formulario.getItemById("935281942");
    var respuesta_21 = ask_21
      .asMultipleChoiceItem()
      .createResponse(pregunta_21);
    respuesta.withItemResponse(respuesta_21);

    var ask_22 = formulario.getItemById("1198057085");
    var respuesta_22 = ask_22
      .asMultipleChoiceItem()
      .createResponse(pregunta_22);
    respuesta.withItemResponse(respuesta_22);

    var ask_23 = formulario.getItemById("1612174293");
    var respuesta_23 = ask_23
      .asMultipleChoiceItem()
      .createResponse(pregunta_23);
    respuesta.withItemResponse(respuesta_23);

    var ask_24 = formulario.getItemById("246682613");
    var respuesta_24 = ask_24
      .asMultipleChoiceItem()
      .createResponse(pregunta_24);
    respuesta.withItemResponse(respuesta_24);

    var ask_25 = formulario.getItemById("2046331306");
    var respuesta_25 = ask_25
      .asMultipleChoiceItem()
      .createResponse(pregunta_25);
    respuesta.withItemResponse(respuesta_25);

    var ask_26 = formulario.getItemById("942192424");
    var respuesta_26 = ask_26
      .asMultipleChoiceItem()
      .createResponse(pregunta_26);
    respuesta.withItemResponse(respuesta_26);

    var ask_27 = formulario.getItemById("1586719257");
    var respuesta_27 = ask_27
      .asMultipleChoiceItem()
      .createResponse(pregunta_27);
    respuesta.withItemResponse(respuesta_27);

    var ask_28 = formulario.getItemById("848014730");
    var respuesta_28 = ask_28
      .asMultipleChoiceItem()
      .createResponse(pregunta_28);
    respuesta.withItemResponse(respuesta_28);
    //envio del formulario
    respuesta.submit();
    //traerPreguntas(); //mando a llamar la funcion para traer sus datos
  } //aqui termina el bucle for
}
