let mostrar = document.getElementById("mostrar");
let menu = document.getElementById("menu");

mostrar.onclick = function(){
    if(menu.style.display=="none"){
        menu.style.display="block"; 
    }else{
        menu.style.display="none";
    }
}