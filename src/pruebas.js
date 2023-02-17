function probarValidarEquipos(){
    console.assert(mostrarError() === 'Tiene que elegir dos equipos',
    'La función falló al invalidar que se elijan menos de dos equipos.')
}

//probarValidarEquipos()