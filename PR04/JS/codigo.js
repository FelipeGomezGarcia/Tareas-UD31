
const pantalla=document.getElementById("operacion");

function escribirInput(xx) { 
    pantalla.value += xx;
}

function operar(){
    pantalla.value = eval(pantalla.value);
}

function borrar(){
    pantalla.value = "";
}

function retr(){
    let texto = pantalla.value;
    let longitud = texto.length;
    pantalla.value = pantalla.value.substr(0, longitud-1);
}

function raiz(){
    pantalla.value = Math.sqrt(pantalla.value);
}

function porcent(){
    pantalla.value = pantalla.value/100;
}

function opuesto(){
    let x = Number(pantalla.value);
    let y = -x;
    pantalla.value=String(y);
}

function inverso(){
    let x = Number(pantalla.value);
    let y = 1/x;
    pantalla.value=String(y);
}
