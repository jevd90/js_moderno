function creaPersona(nombre,apellido){
    return{
         nombre,
         apellido
    }
}

const crearPersona2 = (nombre,apellido) => ({ nombre,apellido}); //Se indica que se retorna todo como objeto

const persona = creaPersona('Lalo','Dominguez');
console.log(persona);



