import React from 'react'
import MovieCard from './MovieCard.jsx'

function MovieList({ movi }) {
    if ( movi.length === 0) {
        return <h2>No movies found</h2>
    }

    return (
        <div className="movie-list">
            {movi.map((movie) => (
                
             
                    <MovieCard key={(movie.imdbID)} movie={movie} />
               
            ))}
        </div>
    )
}

export default MovieList



// import React from 'react';
// import MovieCard from './MovieCard.jsx';

// function MovieList({ movi = [] }) {
//     if (movi.length === 0) {
//         return <h2>No movies found</h2>;
//     }

//     return (
//         <div className="movie-list">
//             {movi.map((movie) => (
//                 <MovieCard
//                     key={movie.imdbID}
//                     movie={movie}
//                 />
//             ))}
//         </div>
//     );
// }

// export default MovieList;