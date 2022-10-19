/*
El factorial de un enteronortenortees el producto de todos los enteros a partir de ese entero hasta el final11.

En términos de una función, podría expresarse de la siguiente manera:

f(n) = n \times (n - 1) \times (n - 2) \times \dots \times 2 \times 1f ( n )=norte×( n−1 )×( n−2 )×⋯×2×1
1 !=1
2! = 2 \veces 1 = 22 !=2×1=2
3! = 3 \ veces 2 \ veces 1 = 63 !=3×2×1=6
4! = 4 \times 3 \times 2 \times 1 = 244 !=4×3×2×1=2 4
5! = 5 \times 4 \times 3 \times 2 \times 1 = 1205 !=5×4×3×2×1=1 2 0
*/
function factorial(n) {
    if (typeof n !== 'number') {
        return null;
    }

    var result = 1;
    for (var i = 2; i <= n; i++) {
        result = result * i;
    }
    return result;
}
var n = parseInt(prompt("Ingrese un numero"));
console.log("El factorial del numero es: "+factorial(n));