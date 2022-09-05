function data(){
    var exReg = /(0[1-9]|1\d|2\d|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/;
    var cadena = document.getElementById("texto");
    if (exReg.test(cadena.value)) {
        document.getElementById("validacion").innerHTML = "La fecha es correcta"
    }else{
        document.getElementById("validacion").innerHTML = "La fecha no es correcta"
    }
}


var text = "Nací el 23/03/1998 en Donostia"
var fecha = "23/03/1998"
