/*
Cree una función para buscar un valor dado en una matriz.
Supongamos que tenemos una matriz dada y queremos verificar si tiene un elemento dado o no.

Esto se puede hacer fácilmente iterando secuencialmente sobre la matriz y comparando cada elemento 
subsiguiente con el elemento a buscar.

Un algoritmo que opera de esta manera para buscar un valor en una matriz se conoce generalmente como algoritmo 
de búsqueda secuencial o búsqueda lineal .

En este ejercicio, debe crear una función linearSearch()que implemente el algoritmo de búsqueda lineal 
para buscar un elemento en una matriz determinada
function linearSearch(arr, target) {
   // Code here...
}
*/
//Se crea la funcion para buscar el array
function linearSearch(array, select) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === select) {
            return true;
        }
        const element = array[i];
        
    }
    return false;
}
//entrada de datos
console.log("Primer valores buscados "+`${linearSearch([1,2,3],2)}`+"\n");
console.log("Segundo valores buscados "+`${linearSearch([1,2,3],"2")}`+"\n");
console.log("Tercer valores buscados "+`${linearSearch(["2","4","6"],"2")}`+"\n");
console.log("Cuarto valores buscados "+`${linearSearch(["2","4","6"],"2")}`);
console.log("Quinto valores buscados "+`${linearSearch([false,false,false,true],true)}`);