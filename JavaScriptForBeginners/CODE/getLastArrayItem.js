let arr1 = [0, 2, 1, 5, 8];//se crea el array
const getLastArrItem = (arr) => {//se usa la funcion flecha para mas versatilidad ya que se ocupa para un solo objetivo
    let lastItem = arr[arr.length - 1];//aqui es donde sabemos cual es la ultima variable
    console.log(`Last element is ${lastItem}`);//se imprime el resultado
};
getLastArrItem(arr1);//se usa la funcion flecha 
