const $botonJugar = document.querySelector('#boton-jugar-partido')
const $botonResetear = document.querySelector('#resetear')

const localDiv = document.querySelector('#equipo-1')
const visitanteDiv = document.querySelector('#equipo-2')

const infoLocal = document.querySelector('.infoLocal')
const infoVisitante = document.querySelector('.infoVisitante');
const infoError = document.querySelector('.infoError');

function mostrarError(){
    let error = false;
    if(infoLocal.textContent === '' || infoVisitante.textContent === ''){
        $botonJugar.classList.add('error');
        infoError.textContent = 'Tenés que elegir dos equipos para jugar el partido'
        error = true;
    }
    return error;
}

function revertirError(){
    const infoError = document.querySelector('.infoError');
    infoError.textContent = '';
    $botonJugar.classList.remove('error');
}

function asignarClaseNivel(equipo){

    if(nivelPotencia.includes(equipo.innerText)) {
        equipo.className = 'equipoPotencia';
    }
    else if (nivelSuperior.includes(equipo.innerText)){
        equipo.className = 'equipoSuperior';
    }
    else if (nivelNormal.includes(equipo.innerText)){
        equipo.className = 'equipoNormal';
    }
    else if (nivelInferior.includes(equipo.innerText)){
        equipo.className = 'equipoInferior';
    }
    equipo.classList.add('equipo');
}

function mostrarInfoLocal(equipo){
    infoLocal.textContent = equipo;
}

function mostrarInfoVisitante(equipo){
    infoVisitante.textContent = equipo;
}

function darEstilo(elemento){
    elemento.style.backgroundColor = "rgb(120, 8, 224)";
    elemento.style.color = "rgb(196, 196, 196)";
}

function resetearEstilosLocales(){
    const campoLocales = document.querySelector('.container1');
    const listaLocales = campoLocales.querySelectorAll('.equipo');
    listaLocales.forEach(function(elemento){
        elemento.style.backgroundColor = 'transparent';
        elemento.style.color = 'black'
    })
}

function resetearEstilosVisitantes(){
    const campoVisitantes = document.querySelector('.container2');
    const listaVisitantes = campoVisitantes.querySelectorAll('.equipo');
    listaVisitantes.forEach(function(elemento){
        elemento.style.backgroundColor = 'transparent';
        elemento.style.color = 'black'
    })
}

function elegirEquipoLocal(div, cuadro){
    let equipoElegido = '';
    
    cuadro.onclick = function(event){
        revertirError();
        resetearEstilosLocales();
        
        const elemento = event.target;
        darEstilo(elemento)
        mostrarInfoLocal(elemento.innerText);
        equipoElegido = elemento.innerText;
    }
    console.log(equipoElegido)
    return equipoElegido;
}

function elegirEquipoVisitante(div, cuadro){
    let equipoElegido = '';

    cuadro.onclick = function(event){
        revertirError();
        resetearEstilosVisitantes();

        const elemento = event.target;
        darEstilo(elemento);
        mostrarInfoVisitante(elemento.innerText);
        equipoElegido = elemento.innerText;
    }
    return equipoElegido;
}

function crearCuadros(){
    let clubes = asignarEquipos();
    let llaves = Object.keys(clubes);
    
    llaves.forEach(function(elemento){
        const cuadro = document.createElement('button');
        cuadro.innerText = elemento;
        asignarClaseNivel(cuadro)
        elegirEquipoLocal(localDiv, cuadro);
        localDiv.appendChild(cuadro);
    })

    llaves.forEach(function(elemento){
        const cuadro = document.createElement('button');
        cuadro.innerText = elemento;
        asignarClaseNivel(cuadro);
        elegirEquipoVisitante(visitanteDiv, cuadro);
        visitanteDiv.appendChild(cuadro);
    })    
}

crearCuadros();

function escribirGoles(){
    //const cuadroLocal = document.getElementsByClassName('.container1').onclick;
    //const cuadroVisitante =
    //let equipo1 = elegirEquipoLocal(localDiv, cuadroLocal);
    //let equipo2 = elegirEquipoVisitante(visitanteDiv, cuadro);
    let golesLocal = 9
    let golesVisitante = 9 //jugarPartido(equipo2);
    
    const $golesLocal = document.querySelector('#golesLocal');
    $golesLocal.textContent = golesLocal;

    const $golesVisitante = document.querySelector('#golesVisitante');
    $golesVisitante.textContent = golesVisitante;

    const guion = document.querySelector('#guion');
    guion.textContent = '-';
    
}

/*
TODO: 
1- ✓ Hacer que tenga un focus de cada lado
2- ✓ Alinear los campos de info para que queden uno junto al otro. Intentar reducir los márgenes a los costados
3- Hacer otra fila más abajo para los goles. Que cuando se simule el partido, haya que reiniciar.
4- Ver si puedo eliminar el botón elegido como local de la lista de visitantes.
5- Codear bien los botones de jugar y resetear
6- Empezar a codear el simulador.
7- Ver si puedo hacer que el programa funcione poniendo el archivo de interfaz antes que el simu en el HTML
8- Codear el archivo pruebas
*/

$botonJugar.onclick = function(){
    //const equipo1 = elegirEquipoLocal(localDiv, cuadro)
    mostrarError();
    //jugar(); //jugar(equipo1, equipo2)
    escribirGoles()
    $botonJugar.className = 'oculto';
    $botonResetear.classList.remove('oculto');
    return false;
}

$botonResetear.onclick = function(){
    window.location.reload()
}

function validarEquipos(){
    let texto = '';
    if(mostrarError()){
        texto = 'Tiene que elegir dos equipos';
    }
    return texto;
}