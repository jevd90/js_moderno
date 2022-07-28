let juegos = ['zelda','far cry', 'crysis','fifa'];

console.log('Largo: ',juegos.length);

juegos.forEach((elemento,indice,arr)=>{
    console.log({elemento,indice,arr});
});