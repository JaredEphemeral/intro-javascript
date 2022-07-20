let btnInicio = document.querySelector('#inicio');

let player1 = document.querySelector('#jugador1');
let player2 = document.querySelector('#jugador2');
let player3 = document.querySelector('#jugador3');

let pos1 = 0;
let pos2 = 0;
let pos3 = 0;


btnInicio.addEventListener('click', () =>{
    pos1 = 0;
    pos2 = 0;
    pos3 = 0;

    player1.style.left = pos1;
    player2.style.left = pos2;
    player3.style.left = pos3;

    btnInicio.style.display = 'none';
    let intervalo = setInterval(carrera,150);

    function carrera(){
        pos1 += Math.round(Math.random()*20);
        player1.style.left = `${pos1}px`;

        pos2 += Math.round(Math.random()*20);
        player2.style.left = `${pos2}px`;

        pos3 += Math.round(Math.random()*20);
        player3.style.left = `${pos3}px`;

        if(pos1 >= 650 || pos2 >= 650 || pos3 >= 650){
            clearInterval(intervalo);
            if(pos1 > pos2 && pos1 > pos3 ){
                console.log("Ganador el Rojo");
            }
            else if(pos2 > pos1 && pos2 > pos3){
                console.log("Ganador el Azul");
            }
            else if(pos3 > pos1 && pos3 > pos2){
                console.log("Ganador el Amarillo");
            }
            else{
                console.log("Empate!");
            }

            btnInicio.style.display = 'initial';
        }
    }
})