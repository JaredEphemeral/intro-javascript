//### Problema 2
//Del siguiente arreglo de numeros, retorna la suma de todos los que son positivos.
const numbers = [ 1, -4, 12, 0, -3, 29, -150];
const positivos = numbers.reduce((suma, valorActual) => (  valorActual > 0 ? suma + valorActual: suma + 0  ) )
console.log(positivos);