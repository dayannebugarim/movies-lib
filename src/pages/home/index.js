import { useState, useEffect } from 'react'
import Header from '../../components/header'
import MovieCardsContainer from '../../components/movie-cards-container'
import MovieDetails from '../../components/movie-details'
import logo from '../../logo.svg'
import { moviesURL, apiKey, language, genreURL, searchURL } from '../../services/api'

export default function Home() {
    

    const [movies, setMovies] = useState([])
    console.log(movies)

    const [filteredMovies, setFilteredMovies] = useState([])

    const [genres, setGenres] = useState([])

    const [genreId, setGenreId] = useState('0')

    const [search, setSearch] = useState('')

    //console.log(search)

    const getMovies = async (url) => {
        const res = await fetch(url)
        const data = await res.json()
        
        setMovies(data.results)
    }
    
    const getGenres = async (url) => {
        const res = await fetch(url)
        const data = await res.json()
        
        setGenres(data.genres)
        console.log(data.genres)
    }

    const getMoviesBySearch = async (url) => {
        const res = await fetch(url)
        const data = await res.json()
        
        setMovies(data.results)
    }

    useEffect(() => {
        const topRatedUrl = `${moviesURL}popular?${apiKey}${language}`
        const genresUrl = `${genreURL}${apiKey}${language}`

        getMovies(topRatedUrl)
        getGenres(genresUrl)
    }, [])

    useEffect(() => {
        const searchUrl = search !== '' ?`${searchURL}${apiKey}${language}&query=${search}` : `${moviesURL}popular?${apiKey}${language}`

        getMoviesBySearch(searchUrl)
        setGenreId('0')
    }, [search])

    return (
        <>
           <Header genres={genres} setSearch={setSearch} search={search} setMovies={setMovies} moviesData={movies} setGenreId={setGenreId} genreId={genreId} setFilteredMovies={setFilteredMovies} />
            
           <MovieCardsContainer moviesData={movies} genres={genres} filteredMovies={filteredMovies} genreId={genreId} />
        </>
    )
}