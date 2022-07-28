

const saludar2 = function (){
    console.log('Hola mundo');
} // funcion anonima 

function saluda(nombre){
    console.log('Hola ' + nombre);
    return 1;
}


const flecha = () => {console.log('Hola flecha');}

const flecha2 = (nombre) =>{console.log('Hola' +nombre);}


saluda('Lalo');


const sumar2 = (a,b) => {return a+b;}

const getAleatorio = () =>  Math.random();

