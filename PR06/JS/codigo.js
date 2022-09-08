function hora(){
    let momento = new Date();
    let hora = momento.getHours();
    let minutos = momento.getMinutes();
    let seconds = momento.getSeconds();

    let strHora = String(hora);
    if (strHora.length == 1) {
        hora = "0" + hora;       
    }
    let strMinutos = String(minutos);
    if (strMinutos.length == 1) {
        minutos = "0" + minutos;       
    }
     let strSeconds = String(seconds);
    if (strSeconds.length == 1) {
        seconds = "0" + seconds;       
    }

    document.getElementById("horas").innerHTML = hora + ":";
    document.getElementById("minutos").innerHTML = minutos + ":";
    document.getElementById("segundos").innerHTML = seconds;

    setTimeout("hora()",1000);
}
hora();