const carasDelDado = 6

export const chancesDeGolPotencia = 11;
export const chancesDeGolSuperior = 9;
export const chancesDeGolNormal = 7;
export const chancesDeGolInferior = 5;

export const nivelPotencia = ['River Plate', 'Boca Juniors'];
export const nivelSuperior = ['Independiente', 'Racing', 'San Lorenzo', 'Defensa y Justicia', 'Estudiantes LP', 'Lanús', 'Talleres', 'Vélez'];
export const nivelNormal = ['Argentinos Juniors', 'Banfield', 'Colón', 'Gimnasia LP', 'Godoy Cruz', 'Huracán', "Newell's", 'Rosario Central', 'Unión'];
export const nivelInferior = ['Platense', 'Sarmiento', 'Tigre'];

export const clubes = nivelPotencia.concat(nivelSuperior).concat(nivelNormal).concat(nivelInferior);

export function tirarDado(){
   return Math.floor(Math.random() * carasDelDado) + 1; // dado 1-6
}

export function obtenerGoles(equipo){
    let chancesDeGol;
    let totalGoles = 0;
    if(nivelPotencia.includes(equipo)){
        chancesDeGol = chancesDeGolPotencia;
    }
    else if(nivelSuperior.includes(equipo)){
        chancesDeGol = chancesDeGolSuperior;
    }
    else if(nivelNormal.includes(equipo)){
        chancesDeGol = chancesDeGolNormal;
    }
    else if(nivelInferior.includes(equipo)){
        chancesDeGol = chancesDeGolInferior;
    }

    for(let i = 0; i < chancesDeGol; i ++){
        if(tirarDado() === 1){
            totalGoles++;
        }
    }
    
    return totalGoles;
}

export function jugar(equipo1, equipo2){
    let golesEquipo1 = obtenerGoles(equipo1);
    let golesEquipo2 = obtenerGoles(equipo2);

    return [golesEquipo1, golesEquipo2];
}
