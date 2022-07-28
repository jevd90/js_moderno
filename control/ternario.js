const dia =0;
const horaActual = 10;

let horaAbierto;
let mensaje ; 

if (dia === 0 || dia === 6){
    console.log('Fin de semana')
    horaAbierto =9;

}else{
    console.log('Dia entre semana');
    horaAbierto = 11;
}
console.log(horaAbierto);

if (horaActual >= horaAbierto){
    mensaje = 'esta abierto';
}else{
    mensaje = 'esta cerrado hoy abrimos a las' + horaAbierto;
}


horaAbierto = ([0,6].includes(dia)) ? 9 : 11;