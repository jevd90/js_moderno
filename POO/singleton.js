class Singleton {
    static instancia; //undefined
    nombre = '';
    constructor(nombre=''){
        if(!!Singleton.instancia){
            return Singleton.instancia;
        }
        Singleton.instancia = this;
        this.nombre = nombre;

    }
}
const instancia = new Singleton('Lalo');
console.log('Nombre en la instancia es', instancia.nombre)