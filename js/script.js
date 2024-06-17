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



function muestraPeliculas(genreId, divId) {
    const container = document.getElementById(divId);
    container.innerHTML = ''; // Limpiar el contenido del contenedor
    
    peliculas.forEach(pelicula => {
        if (pelicula.genre_ids.includes(genreId)) {
            const peliculaDiv = document.createElement('div');
            const tituloPelicula = document.createElement('p');
            const imagenPelicula = document.createElement('img');

            tituloPelicula.textContent = pelicula.title;
            imagenPelicula.src = `https://image.tmdb.org/t/p/w500${pelicula.poster_path}`;
            imagenPelicula.alt = pelicula.title;

            peliculaDiv.appendChild(imagenPelicula);
            peliculaDiv.appendChild(tituloPelicula);
            container.appendChild(peliculaDiv);
        }
    });
}

muestraPeliculas(28, "genero-28");
muestraPeliculas(53, "genero-53");
muestraPeliculas(12, "genero-12");








const filtroAccion = peliculas.filter((element) => element.genre_ids.includes(28));
console.log(filtroAccion);



/*
const peliculasAccion = peliculas.filter(peliculaA => peliculaA.genre_ids === 28);
console.log(peliculasAccion);

const peliculasThriller = peliculas.filter(peliculaT => peliculaT.genre_ids === 53);
console.log(peliculasThriller);  */