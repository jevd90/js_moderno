class Rectangulo{
    #area =0; // propiedad privada
    constructor(base=0,altura=0){
        this.base=base;
        this.altura=altura;
        this.area=base*altura;

    }
}
const rectangulo = new Rectangulo(10,12);
console.log(rectangulo);