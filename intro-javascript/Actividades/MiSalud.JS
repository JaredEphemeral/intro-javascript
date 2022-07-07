let edad = 0;
let esFronterizo = false;
let estaEmbarazada = false;
let semanasGestacion = 0;

edad = Number(prompt("¿Que edad tiene?")); //Se solicita la edad
if(edad >= 18){ //Si tiene 18 o mas se procede a validar los demas elementos
    estaEmbarazada = confirm("¿Está embarazada (S/N)?");
    if(estaEmbarazada){ //Si esta embarazada se procede a validar semanas de gestación
        semanasGestacion = Number(prompt("¿Cuantas semanas de gestación tiene?"));
        if(semanasGestacion >= 9){ //Si tiene mas de 9 semanas de gestación se puede vacunar.
            console.log("Se puede vacunar")
        }
        else{ //Si tiene menos de 9 semanas de gestación no se puede vacunar.
            console.log("No se puede vacunar");
        }
    }
    else{ //Si no está embarazada se valida residencia
        if(edad >= 30){//Si se tiene 30 o mas se pueden vacunar independientemente de la residencia
            console.log("Se puede vacunar")
        }
        else{//Si tiene entre 18 y 30 se valida que resida en un municipio fronterizo
            esFronterizo = confirm("¿Reside en un municipio fronterizo del norte del país (S/N)?");
            if(esFronterizo){ //Si es fronterizo se puede vaucunar
                console.log("Se puede vacunar")
            }
            else{ //No es fronterizo por lo cual no se puede vacunar
                console.log("No se puede vacunar");
            }
        }
    }
}
else{ //Si no tiene 18 años no se puede vacunar
    console.log("No se puede vacunar"); 
}



