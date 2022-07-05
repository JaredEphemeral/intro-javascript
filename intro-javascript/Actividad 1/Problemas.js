/*Problema 1*/
do{
    var numero = parseInt(prompt("Ingrese el numero: "));
}while(isNaN(numero));
var total = numero *2;
alert( numero + " por 2 es: " + total );

/*Problema 2*/
var bandera = true;
do{
    var primerNumero = parseInt(prompt("Ingrese el primer numero: "));
}while(isNaN(primerNumero));
do{
    var segundoNumero = parseInt(prompt("Ingrese el segundo numero: "));
}while(isNaN(segundoNumero));
var resta = primerNumero - segundoNumero;
alert( primerNumero + " menos " + segundoNumero + " es: " + resta );

/*Problema 3*/
const pi = 3.141592;
const radio = 5.3;
var area = pi*(radio**2);
alert("El area del circulo con radio de 5.3cms es : " + area + " cms.");

/*Problema 4*/
const D = 8;
const d = 6;
var area = (D*d)/2;
alert("El area del rombo es : " + area + " cms.");