import React from 'react'
import { useState, useEffect, useRef } from 'react'
import MovieList from '../Components/MovieList'
function Home() {
    const[movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const inputRef = useRef()

    const fetchMovies = async (query,  page = 1) => {
        setLoading(true)
        const response = await fetch(`http://www.omdbapi.com/?apikey=7a644292&s=${query}&page=${page}`)
        const data = await response.json()



        // console.log(data)
        setMovies(data.Search || [])
        setLoading(false)
    }

    useEffect(() => {
        fetchMovies('Avengers')
    }, [])

    const handleSearch = (e) => {
        e.preventDefault()
        const query = inputRef.current.value.trim()
        if (query) {
            fetchMovies(query)
        }
    }



  return (
    <>
    <div className="home">
        <form onSubmit={handleSearch}>
          <input ref={inputRef} className="searchInput" placeholder="Search for a movie..."/>
            <button className="searchBtn" type="submit">Search 🔎</button>
        </form>

        {
            loading ? <p>Loading...</p> : <MovieList movi={movies}/>
        }
        {/* <MovieList movi={movies}/> */}
      </div>
    </>
  )
}

export default Home