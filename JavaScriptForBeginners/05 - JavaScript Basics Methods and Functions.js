/*
Estructura de una funcion
*/
function nameVariable(n){
return n * n;
}
//un bloque de codigo que se ejecuta una rutina de tareas usando una serie de instrucciones

function nameVariable1(var1, var2){
if (var1 > var2)
	return  true;
returb false;
}

function printThanks(){
console.log("Thanks for shopping");
}

function computePrice(cost, discunt){
console.log(cost," ",discunt);
let reduction = cost*discunt;
console.log(cost,discunt,reduction);
return cost-reduction;
}

computePrice(100); /*or*/ console.log(""); computePrice(100,50);

//or 

function computePrice(cost,discount){
let reduction = const*discount;
console.log("You saved :$"+reduction);
return cost-reduction;
result = computePrice(50,0.2);
}

/*
Funciones
En esencia, una función es un bloque de código que podemos ejecutar a pedido. Esto es perfecto para escenarios
 en los que necesitamos realizar la misma tarea varias veces; en lugar de duplicar la lógica en varias 
ubicaciones (lo que dificultaría la actualización cuando llegue el momento), podemos centralizarla en una 
ubicación y llamarla cada vez que necesitemos que se realice la operación; ¡incluso puede llamar funciones 
desde otras funciones!
*/

function nameOfFunction() { // function definition
 // function definition/body
}

/*
MEJORES PRACTICAS PARA UNA FUNCION
Hay un puñado de mejores prácticas para tener en cuenta al crear funciones
	Como siempre, use nombres descriptivos para que sepa lo que hará la función.
	Usa camelCasing para combinar palabras
	Mantenga sus funciones enfocadas en una tarea específica

PASAR INFORMACION A UNA FUNCION
Podemos actualizar nuestro displayGreetingpara aceptar un nombre y mostrarlo.
*/

function displayGreeting(name) {
  const message = `Hello, ${name}!`;
  console.log(message);
}

/*
VALORES PREDERTIMANADOS
Podemos hacer que nuestra función sea aún más flexible agregando más parámetros. Pero, ¿qué pasa si no 
queremos exigir que se especifiquen todos los valores?
*/ 

function displayGreeting(name, salutation='Hello') {
  console.log(`${salutation}, ${name}`);
}


/*
VALORES DEVUELTOS
Hasta ahora, la función que construimos siempre se mostrará en la consola . A veces, esto puede ser 
exactamente lo que estamos buscando, especialmente cuando creamos funciones que llamarán a otros servicios. 
Pero, ¿qué pasa si quiero crear una función de ayuda para realizar un cálculo y devolver el valor para poder 
usarlo en otro lugar?

Podemos hacer esto usando un valor de retorno . La función devuelve un valor de retorno, y puede almacenarse 
en una variable de la misma manera que podríamos almacenar un valor literal, como una cadena o un número.

Si una función devuelve algo, entonces returnse usa la palabra clave. La ""return"" palabra clave espera un valor
o referencia de lo que se devuelve así:

return myVariable;

Un mensaje de saludo donde indica a quien saludar
function createGreetingMessage(name) {
  const message = `Hello, ${name}`;
  return message;
}

Al llamar a esta función almacenaremos el valor en una variable. Esto es muy parecido a como 
estableceríamos una variable en un valor estático (como const name = 'Christopher').

const greetingMessage = createGreetingMessage('Christopher');

FUNCIONES COMO PARAMETROS DE FUNCIONES
A medida que progrese en su carrera de programación, se encontrará con funciones que aceptan funciones 
como parámetros. Este ingenioso truco se usa comúnmente cuando no sabemos cuándo ocurrirá o se completará 
algo, pero sabemos que debemos realizar una operación en respuesta.

Como ejemplo, considere "setTimeout" , que inicia un temporizador y ejecutará el código cuando se complete. 
Necesitamos decirle qué código queremos ejecutar. ¡Suena como un trabajo perfecto para una función!

function displayDone() {
  console.log('3 seconds has elapsed');
}
// timer value is in milliseconds
setTimeout(displayDone, 3000);

FUNCIONES ANONIMAS
Echemos otro vistazo a lo que hemos construido. Estamos creando una función con un nombre que se usará una 
vez. A medida que nuestra aplicación se vuelve más compleja, podemos vernos creando muchas funciones que 
solo se llamarán una vez. Esto no es ideal. ¡Resulta que no siempre necesitamos proporcionar un nombre!

Cuando estamos pasando una función como parámetro, podemos omitir la creación de una por adelantado y, 
en su lugar, construir una como parte del parámetro. Usamos la misma "function" palabra clave, pero en su 
lugar la construimos como un parámetro.

Reescribamos el código anterior para usar una función anónima:

setTimeout(function() {
  console.log('3 seconds has elapsed');
}, 3000);

FUNCIONES DE FECLA GORDA
Un atajo común en muchos lenguajes de programación (incluido JavaScript) es la capacidad de usar 
lo que se llama una función de "flecha o flecha gruesa". Utiliza un indicador especial de "=>", que parece 
una flecha, ¡de ahí el nombre! Al usar "=>", podemos omitir la "function" palabra clave.

Reescribamos nuestro código una vez más para usar una función de flecha gruesa:

setTimeout(() => {
  console.log('3 seconds has elapsed');
}, 3000);

CUANDO USAR CADA ESTRATEGIA
Ahora ha visto que tenemos tres formas de pasar una función como parámetro y puede que se pregunte 
cuándo usar cada una. Si sabe que usará la función más de una vez, créela normalmente. Si lo usará 
solo para una ubicación, generalmente es mejor usar una función anónima. Ya sea que use o no una función 
de flecha gruesa o la "function" sintaxis más tradicional, depende de usted, pero notará que la mayoría de 
los desarrolladores modernos prefieren "=>"
*/