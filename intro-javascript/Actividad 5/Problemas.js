/*Problema 1*/
var arreglo = [1,4,6,10,22,55,46,2,5,0];
for(i = 0; i <= arreglo.length-1;i++){
     arreglo[i] > 3 ? console.log(arreglo[i]):null;
}

/*Problema 2*/
var arregloVacio = [];
let numeroCinco = 0;
while(numeroCinco < 5){
    arregloVacio[numeroCinco] = numeroCinco+1;
    numeroCinco++;
    /*
    arregloVacio.push(numeroCinco);
    */
}
console.log(arregloVacio);

/*Problema 3*/
var arreglo2 = [1,4,6,10,22,55,46,2,5,0];
arreglo2.sort(function(a,b){return a-b});
for(i=0; i <= arreglo2.length-1; i++){
    console.log(arreglo2[i]);
}