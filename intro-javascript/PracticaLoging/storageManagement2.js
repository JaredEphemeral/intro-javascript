let usuarioLogeado = JSON.parse(localStorage.getItem('user1'));

document.addEventListener("DOMContentLoaded",function(){
    console.log("a");
    document.getElementById('parrafoBienvenida').innerHTML = "Bienvenido " + usuarioLogeado.user;
})