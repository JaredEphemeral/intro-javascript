let resultado = document.getElementById("resultado");
let primerNumero = 0;
let idOperacion = 0;
let yaEsDecimal = false;

function numero(numero){
    if(!(resultado.textContent.length > 10))
    {
        if(!(resultado.textContent == '0')){
            if(numero != '.'){
                resultado.textContent += numero;
            }
            else{
                if(!yaEsDecimal){
                    resultado.textContent += numero;
                    yaEsDecimal = true;
                }
            }
        }
        else{
            if(numero != '.'){
                resultado.textContent = numero;
            }
            else{
                resultado.textContent += numero;
                yaEsDecimal = true;
            }
        }
    }
}

function operacion(id){
    if(idOperacion != 0)
    {
        igualar();
    }
    primerNumero = Number(resultado.textContent);
    yaEsDecimal = false;
    idOperacion = id;
    resultado.textContent = "0";
    resultado.textContent = calculo;
}

function borradoTotal(){
    resultado.textContent = "0";
    primerNumero = 0;
    idOperacion = 0;
    yaEsDecimal = false;
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
            case 4: //división
                if( Number(resultado.textContent) === 0 ){
                    resultado.textContent = "Indefinido.";
                }
                else{
                    resultado.textContent = primerNumero / Number(resultado.textContent);
                }
                break;
        }
        primerNumero = 0;
        idOperacion = 0;
        yaEsDecimal = false;
    }
}
