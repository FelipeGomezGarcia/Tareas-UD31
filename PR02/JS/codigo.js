function data(){
    let exReg = /.*(0[1-9]|1[0-9]|2[0-9]|3[01])[/-](0[1-9]|1[12])[/-](19|20)\d\d.*/;
    let cadena = document.getElementById("texto");
    if (exReg.test(cadena.value)) {
        document.getElementById("validacionFecha").innerHTML = "La fecha es correcta";
    }else{
        document.getElementById("validacionFecha").innerHTML = "La fecha no es correcta";
    }
}

function correo(){
    let exReg = /^[a-z0-9.-]+@[a-z0-9]+\.[a-z]{2,3}$/;
    let cadena = document.getElementById("textoCorreo");
    if (exReg.test(cadena.value)) {
        document.getElementById("validacionCorreo").innerHTML = "El correo es correcta";
    }else{
        document.getElementById("validacionCorreo").innerHTML = "El correo no es correcta";
    }
}

function substituir(){
    let cadena = document.getElementById("texto3").value;
    cadena.replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
    document.getElementById("sinCaracteres").innerHTML = cadena;
}

function cambiarOrden(){
    let exReg = /([a-zA-Z]+)\s([a-zA-Z]+)/;
    let cadena = document.getElementById("texto4").value;
    let nombre = cadena.match(exReg);
    document.getElementById("validacion4").innerHTML = nombre[2] +", " + nombre[1];
}

function quitarEtiquetas(){
    let exReg = /<script>.*<\/script>/;
    let cadena = document.getElementById("texto5").value;
    cadena.replace(exReg, '');
    document.getElementById("validacion5").innerHTML = "&quot;" + cadena + "&quot;";
}
