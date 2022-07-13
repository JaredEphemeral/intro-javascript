/*Problema 1*/
/*
function multiply(param1, param2){
    if(param2 === undefined){
        return multiplyV2(param1, 4);
    }
    else{
        return(param1*param2);
    }
}
function multiplyV2(paramDefinido, param3){
    return paramDefinido*param3;
}
multiply(2,3);
*/
/*Problema 2*/
function fibonacci(numero){
    if(numero <= 1) {
        return numero
    }
    else{
        return fibonacci(numero-1) + fibonacci(numero-2);
    }
}

for( i = 0; i < 20; i++){
    console.log(fibonacci(i));
}