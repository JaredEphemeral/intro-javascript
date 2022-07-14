//## Problema 1:
//Cuadre el valor de cada elemento en el array. Suponga que solo obtendrá números en la array de entrada.
//`const input = [ 1, 2, 3, 4, 5 ];`
//Resultado esperado:
//`[ 1, 4, 9, 16, 25]`
//Solución:
const input = [ 1, 2, 3, 4, 5 ];
const resultado = input.map(function(valor){ return Math.pow(valor,2) })
console.log(resultado);

//## Problema 2:
//Calcule los valores de la media y la mediana de los elementos numéricos del siguiente arreglo.
//`const input = [12, 46, 32, 64];`
//Resultado esperado:
//`{ mean: 38.5, median: 32 }`
//Solución:
const input2 = [12, 46, 32, 64];
var arr2 =[];
var obj ={
    mean: ( arr2 = input2.reduce( (suma, valorActual ) => (Number(suma) + Number(valorActual) / input2.length ), arr2 ) ) ,
    median: ( input2[Math.floor(input2.length/2)])
}
console.log(obj);

//## Problema 3
//Si la entrada dada es un número, debe devolver el factorial de ese número. El factorial de un número natural n es el producto de los enteros positivos menores o iguales a n. Entonces, 2! = 2, 3! = 6, 4! = 24 y así sucesivamente.
//Caso de prueba:
//`const input = 6;`
//Result: `720`
//Solución: 
function factorial(num){
    let total = 1;
    for(i = 1; i<=num; i++){
        total = total*i;
    }
    return total;
}
console.log(factorial(6));