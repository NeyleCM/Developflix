import peliculas from './peliculas.js'

//console.log(peliculas)

const generoAccion = 28; 
const generoThriller = 53; 
const generoAventura = 12; 


const peliculasFiltradas1 = peliculas.filter(peliculaA =>
     peliculaA.genre_ids.includes(generoAccion));
console.log(peliculasFiltradas1);


const peliculasFiltradas2 = peliculas.filter(peliculaT => 
    peliculaT.genre_ids.includes(generoThriller));
console.log(peliculasFiltradas2)


  const peliculasFiltradas3 = peliculas.filter(peliculaAv =>
    peliculaAv.genre_ids.includes(generoAventura));
console.log(peliculasFiltradas3);



/*
const peliculasAccion = peliculas.filter(peliculaA => peliculaA.genre_ids === 28);
console.log(peliculasAccion);

const peliculasThriller = peliculas.filter(peliculaT => peliculaT.genre_ids === 53);
console.log(peliculasThriller);  */