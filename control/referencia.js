let a =10;
let b=a;
a=20;

let juan = {nombre: 'juan'};

let lalo = juan;

lalo.nombre = 'lalo';  // los objetos pasan por referencia

const  cambia = (persona) =>{
    persona.nombre = 'tony';
    return persona;
}

const frutas = ['manzanas','mango'];

frutas.push('uva');

