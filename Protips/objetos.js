let personaje = {
    nombre: 'Stark',
    codeName: 'Iron man',
    poder: 'armandura',
    estado: true,
    edad: 40,
    cords: {
        lat: 34.2,
        long: 23.3
    },
    trajes: ['mark1','mark2']
};

console.log('Nombre:', personaje.trajes.length);

delete personaje.edad; // borra propiedad

const entries = Object.entries(personaje); // convierte objeto a arreglo

Object.freeze(personaje);

