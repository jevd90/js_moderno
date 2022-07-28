class PersonaNatural {
static    _conteo =0;
static get conteo(){
    return Persona._conteo + 'instancias';
}
    nombre='';
    clave='';
    frase='';
    comida='';
    constructor(nombre='sin nombre', codigo='sin codigo',frase = 'sin frase'){
        this.nombre=nombre;
        this.clave=this.clave;
        this.frase=frase;
        Persona._conteo++;
    }
    set comidaFavorita(comida){
        this.comida = comida;
    }
    get comidaFavorita(){
        return `la comida favorita de ${this.nombre} es ${this.comida}`;
    }

    quienSoy(){
        console.log(`${this.nombre} ${this.frase}`);
    }
}

const spiderman = new PersonaNatural('Peter','Spiderman','Aracnido');

spiderman.quienSoy();

spiderman.comidaFavorita = 'Pastel';

console.log(spiderman);