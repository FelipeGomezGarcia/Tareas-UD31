window.onload = function(){ //Acciones tras cargar la página
    
    document.onkeydown = teclado; //función teclado disponible
    }
    const pantalla=document.querySelector("#operacion"); //elemento pantalla de salida
    x="0"; //número en pantalla
    xi=1; //iniciar número en pantalla: 1=si; 0=no;
    coma=0; //estado coma decimal 0=no, 1=si;
    ni=0; //número oculto o en espera.
    op="no"; //operación en curso; "no" =  sin operación.
    
    //mostrar número en pantalla según se va escribiendo:
    function escribirInput(xx) { //recoge el número pulsado en el argumento.
        pantalla.innerHTML = xx;
    }

