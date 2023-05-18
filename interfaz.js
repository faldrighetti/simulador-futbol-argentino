const $botonElegirLocal = document.querySelector('#boton-seleccionar-local')
const $botonElegirVisitante = document.querySelector('#boton-seleccionar-visitante')
const $botonJugar = document.querySelector('#boton-jugar-partido')
const equipoLocal = document.querySelector('#equipo-local')
const equipoVisitante = document.querySelector('#equipo-visitante')
const infoVisitante = document.querySelector('#visitante')
const $botonResetear = document.querySelector('#resetear')
const todosLosClubes = document.querySelectorAll('option')
const visitantes = document.querySelector('#lista-de-visitantes')

function agregarLocales(){
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

$botonElegirLocal.onclick = function(){
    const localElegido = document.querySelector('#locales').value;
    console.log(localElegido);
 
    infoVisitante.className = ''
    equipoLocal.textContent = 'Local: ' + equipo1.equipo
    crearVisitantes()
    
    return false;
}

export function crearVisitantes(){
    const localElegido = document.querySelector('#locales').value;
    const espacioVisitantes = document.querySelector('#visitantes');
    clubes.forEach((equipo) => {
        if(equipo.textContent !== localElegido){
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
    equipo2.equipo = $formEquipo2.equipo.value
    equipoVisitante.textContent = 'Visitante: ' + equipo2.equipo
    $botonJugar.className = 'jugar'
    return false;
}

$botonJugar.onclick = function(){
    jugar()
    $botonJugar.className = 'oculto'
    $botonResetear.className = 'resetear'
    return false;
}

$botonResetear.onclick = function(){
    window.location.reload()
}
