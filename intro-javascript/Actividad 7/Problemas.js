/*Problema 1*/
let oracion = prompt("Ingrese una oración: ");
let buscar = prompt("Ingrese palabra a buscar en la oración: ");
if(buscador(oracion, buscar)){
    alert("La palabra se encontró en la oración");
}
else{
    alert("La palabra no se encontró en la oración");
}

function buscador(oracion, buscar){
    return oracion.includes(buscar);
} 

/*Problema 2*/
const numbers = [1,2,3,4,10,11];
let sumaElementos = sumarElementos(numbers);
console.log(sumaElementos);

function sumarElementos(numeros){
    let suma = 0;
    for(i = 0; i<=numeros.length -1; i++){
        suma += numeros[i];
    }
    return suma;
}

/*Problema 3*/
let word1 = prompt("Ingrese una palabra: ");
let newWord = esPalindromo(word1);
if( newWord == word1){
    alert("La palabra es Palindromo")
}
else{
    alert("La palabra no es Palindromo")
}

function esPalindromo(palabra){
    let nuevaPalabra = "";
    let controlador = 0;
    while( controlador <= palabra.length -1 ){
        nuevaPalabra += palabra[palabra.length - (1+controlador)];
        controlador++;
    }
    return nuevaPalabra
}


/*Problema 4*/
let oracion2 = prompt("Ingrese una oración: ");
let letraBuscar = prompt("Ingrese una letra a buscar en la oración: ");
let totalOcurrencias = buscarOcurrencias(oracion2, letraBuscar);
console.log(totalOcurrencias);
function buscarOcurrencias(oracion, letra){
    let contador = 0;
    for(i = 0; i<= oracion2.length; i++){
        if(oracion2[i] === letra ){
            contador++;
        }
    }
    return contador;
}

/*Problema 5*/
let arr = [45,56,32,98,1000,5,23];
let numeroMayor = buscarNumeroMayor(arr);
console.log(numeroMayor);

function buscarNumeroMayor (arreglo){
    arreglo.sort(function(a,b){return a-b});
    return arreglo[arreglo.length-1];
}

/*Problema 6*/
let sistema = prompt("Eliga sistema de temperaturas base: [1]Celsius | [2]Fahrenheit :")
let gradosBase = prompt("Ingrese grados a convertir al otro sistema: ");
let gradosResultado = convertirGrados(sistema, gradosBase);
console.log(gradosResultado);

function convertirGrados(sistema, grados){
    let resultado = 0;
    if(sistema == 1){
        resultado = (  (grados * (9/5) ) + 32  )
    }
    else{
        resultado = ( (grados -32) * (5/9) );
    }
    return resultado;
}