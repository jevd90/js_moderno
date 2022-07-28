let a = 5;

if(a>10){
console.log("A es mayor a 10");

}else{
    console.log("A es menor a 10");
}

const hoy = new Date();

let dia = hoy.getDay();

//sin usar if else

dia = 3;

const dialetra={
    0: 'domingo',
    1: 'lunes',
    2: 'martes',
    3: 'miercoles',
    4: 'jueves',
    5: 'viernes',
    6: 'sabado'
}

console.log(dialetra[dia]);



