const carasDelDado = 6

const $formEquipo1 = document.querySelector('#equipo-1')
const $formEquipo2 = document.querySelector('#equipo-2')
const resultado = document.querySelector('#resultado')

let equipoSeleccionado1 = ''
let equipoSeleccionado2 = ''

let nivelPotencia = ['River Plate', 'Boca Juniors']
let nivelSuperior = ['Independiente', 'Racing', 'San Lorenzo', 'Colón', 'Defensa y Justicia', 'Estudiantes LP', 'Lanús', 'Talleres', 'Vélez']
let nivelNormal = ['Argentinos Juniors', 'Arsenal', 'Atlético Tucumán', 'Banfield', 'Gimnasia LP', 'Godoy Cruz', 'Huracán', "Newell's", 'Rosario Central', 'Unión']
let nivelInferior = ['Aldosivi','Barracas Central', 'Central Córdoba', 'Patronato', 'Platense', 'Sarmiento', 'Tigre']


function tirarDado(){
   return Math.floor(Math.random() * carasDelDado) + 1; // dado 1-6
}

//Esto de abajo está mal, no entra al if ni asigna la clase de cada nivel.

function obtenerGolesDelEquipo1(){

    let totalGoles = []

    for(let i = 0; i < nivelPotencia.length; i++){
        if (nivelPotencia[i] === $formEquipo1.equipo.value){
            equipoSeleccionado1.className = 'potencia'
        }
    }
    
    let chancesDeGol = 5

    if (equipoSeleccionado1.className === 'potencia'){
        console.log('Funciona')
        chancesDeGol = 11
    } else if (equipoSeleccionado1.className === 'superior'){
        chancesDeGol = 9
    } else if( equipoSeleccionado1.className === 'normal'){
        chancesDeGol = 7
    }
    
 
    for (let i = 0; i < chancesDeGol; i++){
        let chance = tirarDado()
        if (chance === 1){
            totalGoles.push('gol') 
        }
    }

    return totalGoles.length
}

function obtenerGolesDelEquipo2(){
    
    let totalGoles = []
    let chancesDeGol = 5
    
    if (equipoSeleccionado2.className === 'potencia'){
        chancesDeGol = 11
    } else if (equipoSeleccionado2.className === 'superior'){
        chancesDeGol = 9
    } else if( equipoSeleccionado2.className === 'normal'){
        chancesDeGol = 7
    }


    for (let i = 0; i < chancesDeGol; i++){
        let chance = tirarDado()
        if (chance === 1){
            totalGoles.push('gol') 
        }
    }

    return totalGoles.length
}


const equipo1 = {
    equipo: equipoSeleccionado1
}

const equipo2 = {
    equipo: equipoSeleccionado2
}

function jugar(){

    equipo1.goles = obtenerGolesDelEquipo1()
    equipo2.goles = obtenerGolesDelEquipo2()

    if (equipo1.goles > equipo2.goles) {
        resultado.innerText = equipo1.equipo + " le ganó " + equipo1.goles + '-' + equipo2.goles + ' a ' + equipo2.equipo + '.'
    }
    else if ((equipo2.goles > equipo1.goles)){
        resultado.innerText = equipo2.equipo + " le ganó " + equipo2.goles + '-' + equipo1.goles + ' a ' + equipo1.equipo + '.'
    }
    else{
        if (equipo2.equipo === 'Independiente'){
            resultado.innerText = equipo1.equipo + " e " + equipo2.equipo + ' empataron ' + equipo1.goles + '-' + equipo2.goles + '.'
        } else {
        resultado.innerText = equipo1.equipo + " y " + equipo2.equipo + ' empataron ' + equipo1.goles + '-' + equipo2.goles + '.'}
    }
}

//TODO:

//1- Entra al if sin distinguir las clases de cada equipo, por lo que juzga a todos como inferior. Arreglar eso.
//X2- Reemplazar los console.log del resultado por un cuadro de texto en appendChild.
//X3- Botón resetear. Línea 33 de interfaz, darle una función para que se recargue la página.
//4- Botón jugar, darle una función que lo deshabilite cuando se le da clic. Es decir, que solo se pueda usar una vez.
//5- Pruebas, que mandar a jugar sin elegir club dé error. O mejor, que se marque en rojo el campo si no se eligió nada.
//X6- Que cuando se elija un local, se elimine de la lista de visitantes. Impedir un River vs River.
//7- Hacer un CSS bonito.
//8- Agregar div al elegir el equipo. Por ejemplo: "Local: River", y abajo "Visitante: Boca" ya antes de cliquear Jugar
//X9- Corregir el "River y Independiente empataron 1-1", cuando Independiente es visitante.