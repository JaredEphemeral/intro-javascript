let resultado = document.getElementById("resultado");
let primerNumero = 0;
let idOperacion = 0;

function numero(numero){
    if(!(resultado.textContent.length > 10))
    {
        if(!(resultado.textContent== '0')){
            resultado.textContent += numero;
        }
        else{
            resultado.textContent = numero;
        }
    }
}

function operacion(id){
    primerNumero = Number(resultado.textContent);
    switch(id){
        case 1: //suma
            idOperacion = 1;
            resultado.textContent = "0";
            break;
        case 2: //resta
            idOperacion = 2;
            resultado.textContent = "0";
            break;
        case 3: //multiplicación
            idOperacion = 3;
            resultado.textContent = "0";
            break;
        case 4: //divición
            idOperacion = 4;
            resultado.textContent = "0";
            break;
    }
    resultado.textContent = calculo;
}

function borradoTotal(){
    resultado.textContent = "0";
    primerNumero = 0;
    idOperacion = 0;
}

function igualar(){
    if(idOperacion != 0){
        switch(idOperacion){
            case 1: //suma
                resultado.textContent = primerNumero + Number(resultado.textContent);
                break;
            case 2: //resta
                resultado.textContent = primerNumero - Number(resultado.textContent);
                break;
            case 3: //multiplicación
                resultado.textContent = primerNumero * Number(resultado.textContent);
                break;
            case 4: //divición
                if( Number(resultado.textContent) === 0 ){
                    resultado.textContent = "ERROR: Divición entre cero.";
                }
                else{
                    resultado.textContent = primerNumero + Number(resultado.textContent);
                }
                break;
        }
        primerNumero = 0;
        idOperacion = 0;
    }
}
