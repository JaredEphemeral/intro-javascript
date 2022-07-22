let btnInicio = document.querySelector('#inicio');
let usuarioTxt = document.getElementById('inputUsuario');
let contraseñaTxt = document.getElementById('inputContraseña');

const usuario = {
    user: "Jared",
    pass: "12345"
};

document.addEventListener("DOMContentLoaded",function(){
    guardarEnLocal(usuario);
})

btnInicio.addEventListener('click', (e) =>{
    e.preventDefault();
    let usuarioAlmacenado = JSON.parse(localStorage.getItem('user1'));
    console.log(usuarioAlmacenado.user);
    if( usuarioTxt.value == usuarioAlmacenado.user && contraseñaTxt.value == usuarioAlmacenado.pass ){
        window.location.href = "./profile.html";
    }
    else{
        alert("Credenciales incorrectas");
    }
})


function guardarEnLocal(elemento){
    localStorage.setItem('user1', JSON.stringify(usuario))
}