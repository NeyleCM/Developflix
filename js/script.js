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
            const movieDiv = document.createElement('div');
            const movieTitle = document.createElement('p');
            const moviePoster = document.createElement('img');

            movieTitle.textContent = pelicula.title;
            moviePoster.src = `https://image.tmdb.org/t/p/w500${pelicula.poster_path}`;
            moviePoster.alt = pelicula.title;

            movieDiv.appendChild(moviePoster);
            movieDiv.appendChild(movieTitle);
            container.appendChild(movieDiv);
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