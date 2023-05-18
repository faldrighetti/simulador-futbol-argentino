import { clubes, nivelPotencia, nivelSuperior, nivelNormal, nivelInferior, jugar } from "./simulador.js"

const $botonElegirLocal = document.querySelector('#boton-seleccionar-local');
const $botonElegirVisitante = document.querySelector('#boton-seleccionar-visitante');
const $botonJugar = document.querySelector('#boton-jugar-partido');
const infoLocal = document.querySelector('#equipo-local');
const infoVisitante = document.querySelector('#equipo-visitante');
const equipoVisitante = document.querySelector('#visitante');
const $botonResetear = document.querySelector('#resetear');
const resultadoPartido = document.querySelector('#resultado');

export function cargarEquipos(){
    const espacioLocales = document.querySelector('#locales');
    clubes.forEach((equipo) => {
        const botonClub = document.createElement('option');
        if(nivelPotencia.includes(equipo)){
            botonClub.classList.add('potencia');
        }
        else if(nivelSuperior.includes(equipo)){
            botonClub.className = 'superior';
        }
        else if(nivelNormal.includes(equipo)){
            botonClub.className = 'normal';
        }
        else if(nivelInferior.includes(equipo)){
            botonClub.className = 'inferior';
        }
        botonClub.textContent = equipo;
        espacioLocales.appendChild(botonClub);
    })
}

$botonElegirLocal.onclick = function(event){
    event.preventDefault();
    const localElegido = document.querySelector('#locales').value;
    equipoVisitante.className = '';
    infoLocal.textContent = 'Local: ' + localElegido;
    crearVisitantes();
}

export function crearVisitantes(){
    const localElegido = document.querySelector('#locales').value;
    const espacioVisitantes = document.querySelector('#visitantes');
    clubes.forEach((equipo) => {
        if(equipo !== localElegido){
            const botonClub = document.createElement('option');
            if(nivelPotencia.includes(equipo)){
                botonClub.classList.add('potencia');
            }
            else if(nivelSuperior.includes(equipo)){
                botonClub.className = 'superior';
            }
            else if(nivelNormal.includes(equipo)){
                botonClub.className = 'normal';
            }
            else if(nivelInferior.includes(equipo)){
                botonClub.className = 'inferior';
            }
            botonClub.textContent = equipo;
            espacioVisitantes.appendChild(botonClub);
        }
    })
}

$botonElegirVisitante.onclick = function(){
    const visitanteElegido = document.querySelector('#visitantes').value;
    infoVisitante.textContent = 'Visitante: ' + visitanteElegido;
    $botonJugar.className = 'jugar';
    return false;
}

function escribirResultado(){
    const localElegido = document.querySelector('#locales').value;
    const visitanteElegido = document.querySelector('#visitantes').value;
    const resultado = jugar(localElegido, visitanteElegido);
    const golesLocal = resultado[0];
    const golesVisitante = resultado[1];

    if (golesLocal > golesVisitante) {
        resultadoPartido.textContent = localElegido + " le ganó " + golesLocal + '-' + golesVisitante + ' a ' + visitanteElegido + '.'
    }
    else if ((golesVisitante > golesLocal)){
        resultadoPartido.textContent = visitanteElegido + " le ganó " + golesVisitante + '-' + golesLocal + ' a ' + localElegido + '.'
    } else {
        if (visitanteElegido === 'Independiente'){
            resultadoPartido.textContent = localElegido + " e " + visitanteElegido + ' empataron ' + golesLocal + '-' + golesVisitante + '.'
        } else {
            resultadoPartido.textContent = localElegido + " y " + visitanteElegido + ' empataron ' + golesLocal + '-' + golesVisitante + '.'
        }
    }
}

$botonJugar.onclick = function(){
    escribirResultado();
    $botonJugar.className = 'oculto';
    $botonResetear.className = 'resetear';
    return false;
}

$botonResetear.onclick = function(){
    window.location.reload();
}
