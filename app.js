let numeroRandom = 0;
let intentos = 0;
let numMaxInt = 7;
let numerosSorteados = [];
let numeroMaximo = 100;


function verificarIntento () {      // getElementById sirve para buscar el elemnto por id dentro de HTML
    while (intentos < numMaxInt){
        let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
        console.log(numeroRandom);
        // El triple igual sirve para verificiar igualar en valor y tipo de dato.
        if (numeroRandom === numeroUsuario) {
            asignarTextoElemento('p', `Felicidades, acertaste en ${intentos} ${intentos == 1 ? 'intento' : 'intentos'}`);
            document.getElementById('reiniciar').removeAttribute('disabled');
        } 
        else {
            if (numeroRandom > numeroUsuario) {
                asignarTextoElemento('p', `El numero secreto es mayor al que ingresaste, ingresaste el ${numeroUsuario}`);
            }
            else {
                asignarTextoElemento('p', `El numero secreto es menor al que ingresaste, ingresaste el ${numeroUsuario}`);
            }
            intentos++;
            limparCaja();
        }
        return;
    }
    asignarTextoElemento('p', `Juego terminado, el numero secreto era ${numeroRandom}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Ingresa un numero del 1 al ${numeroMaximo}`);
    numeroRandom = numeroAleatorio();
    intentos = 1;
    
    
}
condicionesIniciales();

function reiniciarJuego() {
    // Paso #1 Limpiar la caja
    limparCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}



function limparCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function numeroAleatorio() {

    let numeroGenerado = Math.floor(Math.random() *numeroMaximo)+1;
    // console.log(numeroGenerado);
    // console.log(numerosSorteados);
    
    // Si ya sorteamos todos lo numeros
    if(numerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los valores posibles, reinicia la pagina para seguir jugando');    
    } 
    else {
        // Si el numeor generado esta incluido en la lista
        if (numerosSorteados.includes(numeroGenerado) ) {
            return numeroAleatorio();
        }
        else {
            numerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}


