import React from 'react'
import {Link} from 'react-router-dom'
function MovieCard({movie}) {
  return (
    <>
      {/* <div className="movie-list"> */}
          {/* <div className="movie-card">
            <img alt={movie.Title} src={movie.Poster}/>
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p> */}
              {/* <Link to={`/movie/${movie.imdbID}`} >Details</Link>
               */}
                  {/* <Link to={`/movie/${movie.imdbID}`}>Details</Link>
          </div> */}
    {/* </div> */}
    <div className="movie-card">
    <img src={movie.Poster} alt={movie.Title} />

    <div className="movie-card-content">
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>

        <Link to={`/movie/${movie.imdbID}`}>
            View Details
        </Link>
    </div>
</div>
    </>
  )
}

export default MovieCard