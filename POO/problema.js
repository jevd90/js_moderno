function Persona(nombre,edad){ //funcion para crear instancias
    console.log("Se ejecuto esta linea");
    this.nombre = nombre;
    this.edad = edad;
    this.imprimir = function(){
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }
}


const lalo = new Persona('Lalo',23);

console.log(lalo);

lalo.imprimir();

