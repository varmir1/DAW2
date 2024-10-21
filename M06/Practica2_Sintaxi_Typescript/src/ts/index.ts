

const visitas_maximas: number = 3;
let nombre_pagina: string;
let contador_vis: number = 2;
var mensaje_bv: string = "Hola, bienvenido!";



do {
    if(contador_vis < visitas_maximas){
        contador_vis++;
        console.log
    }
    else if(contador_vis = visitas_maximas){
        contador_vis++;

    }
} while(contador_vis < visitas_maximas);


if (contador_vis < visitas_maximas) { 
    contador_vis++; 
    console.log(mensaje_bv) 
    if (contador_vis <= visitas_maximas) { 
        contador_vis++; 
        console.log(mensaje_bv)
        if (contador_vis < visitas_maximas) { 
            contador_vis++; 
            console.log(mensaje_bv) 
        }
        else {
            mensaje_bv = "Adiós, buenas tardes"; 
            console.log(mensaje_bv); 
        }
    }
}


