/** Efecto marcar en que pagina estas del menu **/

var lista = document.getElementsByClassName("menu");    // Se obtienen los elementos del menu
var path = window.location.pathname;                              // Variable en donde se almacena la ruta acutal
var grupo = path.split("HTML/")[1].split("/")[0];                         // Elemento del directorio


// Se compara el nombre del directorio para saber en que grupo nos encontramos
if (grupo === 'Entrenadores') {
    lista[0].children[0].firstElementChild.style.color = '#FACC02';
    lista[0].children[0].firstElementChild.style.textDecoration = "underline";
} else if (grupo === 'Rutinas') {
    lista[0].children[1].firstElementChild.style.color = '#FACC02';
    lista[0].children[1].firstElementChild.style.textDecoration = "underline";
} else if (grupo === 'Ejercicios') {
    lista[0].children[2].firstElementChild.style.color = '#FACC02';
    lista[0].children[2].firstElementChild.style.textDecoration = "underline";
} else if (grupo === 'Alimentacion') {
    lista[0].children[3].firstElementChild.style.color = '#FACC02';
    lista[0].children[3].firstElementChild.style.textDecoration = "underline";
} else {
    lista = document.getElementsByClassName("sign_log");
    if (grupo === 'logIn.html') {

        lista[0].children[0].firstElementChild.style.color = '#FACC02';
        lista[0].children[0].firstElementChild.style.textDecoration = "underline";
    } else if (grupo === 'registro.html') {
        lista[0].children[1].firstElementChild.style.color = '#FACC02';
        lista[0].children[1].firstElementChild.style.textDecoration = "underline";
    }
}

//Efecto de ocultación de cabecera al hacer scroll
var prevScrollpos = window.scrollY;
window.onscroll = function () {
    var currentScrollPos = window.scrollY;
    const elem = document.getElementsByClassName("fijo");
    var altura = elem[0].offsetHeight;
    elem[0].style.transition = "top 0.3s";

    if (prevScrollpos > currentScrollPos) {
        document.getElementsByClassName("fijo")[0].style.top = "0";

    } else {

        document.getElementsByClassName("fijo")[0].style.top = '-'+ altura +'px';
    }
    prevScrollpos = currentScrollPos;
}




