/*
Aclarar que solo sirve por ahorra para opciones multiples
Aqui mandamos a llamar cada una de los id de nuestras preguntas o incisos
Utilizarlo para tener mejor presicion ala hora de hacer las consultas
*/
function traerPreguntas() {
  var formulario = FormApp.openById(
    "1cO9jTr2QjynoRpjr5e7mhj5wGY4lYF36mjXZJxmlSmY"
  );
  var preguntas = formulario.getItems();
  preguntas.forEach((pregunta) => {
    Logger.log(pregunta.getId().toString());
    Logger.log(pregunta.getTitle());
    Logger.log(pregunta.getType());
  });
}
