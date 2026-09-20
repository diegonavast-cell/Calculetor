let pantalla = document.getElementById("pantalla");

function Agregar(valor) {
    pantalla.value += valor;
}

function Eliminar(){
    pantalla.value = "";
}

function Calcular(){
    pantalla.value = eval(pantalla.value);
}