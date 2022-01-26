const carasDelDado = 6

const $formEquipo1 = document.querySelector('#equipo-1')
const $formEquipo2 = document.querySelector('#equipo-2')
const resultado = document.querySelector('#resultado')

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
    let chancesDeGol = 5

    for(let i = 0; i < nivelPotencia.length; i++){
        if (nivelPotencia[i] === $formEquipo1.equipo.value){
           equipo1.clase = 'potencia'
           chancesDeGol = 11
        }
    }

    for(let j = 0; j < nivelSuperior.length; j++){
        if(nivelSuperior[j] === $formEquipo1.equipo.value){
            equipo1.clase = 'superior'
            chancesDeGol = 9
        }
    }

    for(let k = 0; k < nivelNormal.length; k++){
        if(nivelNormal[k] === $formEquipo1.equipo.value){
            equipo1.clase = 'normal'
            chancesDeGol = 7
        }
    }

    for(let l = 0; l < nivelInferior.length; l++){
        if(nivelInferior[l] === $formEquipo1.equipo.value){
            equipo1.clase = 'inferior'
        }
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
    
    for(let i = 0; i < nivelPotencia.length; i++){
        if (nivelPotencia[i] === $formEquipo2.equipo.value){
           equipo2.clase = 'potencia'
           chancesDeGol = 11
        }
    }

    for(let j = 0; j < nivelSuperior.length; j++){
        if(nivelSuperior[j] === $formEquipo2.equipo.value){
            equipo2.clase = 'superior'
            chancesDeGol = 9
        }
    }

    for(let k = 0; k < nivelNormal.length; k++){
        if(nivelNormal[k] === $formEquipo2.equipo.value){
            equipo2.clase = 'normal'
            chancesDeGol = 7
        }
    }

    for(let l = 0; l < nivelInferior.length; l++){
        if(nivelInferior[l] === $formEquipo2.equipo.value){
            equipo2.clase = 'inferior'
        }
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
    equipo: $formEquipo1.equipo.value
}

const equipo2 = {
    equipo: $formEquipo2.equipo.value
}

function jugar(){

    console.log(equipo1)
    console.log(equipo2)

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

//X1- Entra al if sin distinguir las clases de cada equipo, por lo que juzga a todos como inferior. Arreglar eso.
//X2- Reemplazar los console.log del resultado por un cuadro de texto en appendChild.
//X3- Botón resetear. Línea 33 de interfaz, darle una función para que se recargue la página.
//4- Botón jugar, darle una función que lo deshabilite cuando se le da clic. Es decir, que solo se pueda usar una vez.
//X5- Pruebas, que mandar a jugar sin elegir club dé error. O mejor, que se marque en rojo el campo si no se eligió nada.
//X6- Que cuando se elija un local, se elimine de la lista de visitantes. Impedir un River vs River.
//7- Hacer un CSS bonito.
//8- Agregar div al elegir el equipo. Por ejemplo: "Local: River", y abajo "Visitante: Boca" ya antes de cliquear Jugar
//X9- Corregir el "River y Independiente empataron 1-1", cuando Independiente es visitante.
