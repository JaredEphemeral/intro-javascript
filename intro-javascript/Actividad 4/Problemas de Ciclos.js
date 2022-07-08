/*Problema 1*/
let numero = Number(prompt("Ingrese un numero: "));
let varControl = 1;

while(varControl<=numero){
    if(varControl%5==0){
        console.log(varControl);
    }
    varControl++;
}

/*Problema 2*/
let numeroDo = Number(prompt("Ingrese un numero: "));
let varControlDo = 1;
do{
    if(varControlDo % 5 == 0){
        console.log(varControlDo);
    }
    varControlDo++;
}while(varControlDo <= numeroDo);

/*Problema 3*/
for(i = 1; i <= 50; i++){
    if(i % 2 != 0){
        console.log(i);
    }
}

/*Problema 4*/
let primerNumero = Number(prompt("Ingrese el primer numero: "));
let segundoNumero = Number(prompt("Ingrese el segundo numero: "));
let numeroAyuda = 0;
if(primerNumero > segundoNumero){
    numeroAyuda = primerNumero;
    primerNumero = segundoNumero;
    segundoNumero = numeroAyuda;
}
if( (segundoNumero - primerNumero) > 10 ){
    segundoNumero -= ((segundoNumero - primerNumero) -10 )
}
console.log(primerNumero);
console.log(segundoNumero);
for( i = 1; i <= 100; i++){
    if( i >= primerNumero && i <= segundoNumero ){
        continue;
    }
    console.log(i);
}

/*Problema bonus*/
let numeroRNG1 = 0;
let numeroRNG2 = 0;
let total = 0;
let respuestaUsuario = 0;
let controlDoWhile = true
do{
    do{
        numeroRNG1 = Math.floor(Math.random() * 10);
    }while(numeroRNG1 >= 10 || numeroRNG1 < 0);

    do{
        numeroRNG2 = Math.floor(Math.random() * 1000);
    }while(numeroRNG2 > 999 || numeroRNG2 < 0);

    total = numeroRNG1 * numeroRNG2;
    respuestaUsuario = Number(prompt("¿Cuanto da la multiplicación de " + numeroRNG1 + " por " + numeroRNG2 + "?"));
    if(respuestaUsuario == total){
        controlDoWhile = false;
        alert("Ganaste!");
    }
    else{
        alert("Intentalo de nuevo.");
    }
}while(controlDoWhile);
