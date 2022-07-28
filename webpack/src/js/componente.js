import '../css/componentes.css'
import webpacklogo from 'webpack';'../assets/img/hades.jpg'



export const saludar = (nombre) =>{
    console.log('Creando etiquet h1');
    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${nombre}`;
    document.body.append(h1);
    const img = document.createElement('img');
    img.src = webpacklogo;
    document.body.append(img);
}