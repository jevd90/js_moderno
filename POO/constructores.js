class Persona {
    static porObjeto({nombre,apellido,pais}){
        return new Persona(nombre,apellido,pais);
    }
    constructor(nombre,apellido,pais){
        this.nombre = nombre;
        this.apellido= apellido;
        this.pais = pais;
    }
    getInfo(){
        console.log(`info : ${this.nombre},${this.apellido},${this.pais}`);
    }
}
const nom ='Lalo',
    ape= 'Vargas',
    pais = 'Mexico';

const persona1 = new Persona(nom,ape,pais);
persona1.getInfo();