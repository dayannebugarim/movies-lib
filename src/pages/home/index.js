import { useState, useEffect } from 'react'
import Header from '../../components/header'
import MovieCardsContainer from '../../components/movie-cards-container'
import MovieDetails from '../../components/movie-details'
import logo from '../../logo.svg'
import { moviesURL, apiKey, language, genreURL } from '../../services/api'

export default function Home() {
    const [openDetails, setOpenDetails] = useState(false);

    const [topMovies, setTopMovies] = useState([])

    const [genres, setGenres] = useState([])

    const getTopRatedMovies = async (url) => {
        const res = await fetch(url)
        const data = await res.json()
        
        setTopMovies(data.results)
    }
    
    const getGenres = async (url) => {
        const res = await fetch(url)
        const data = await res.json()
        
        setGenres(data.genres)
        console.log(data.genres)
    }

    useEffect(() => {
        const topRatedUrl = `${moviesURL}popular?${apiKey}${language}`
        const genresUrl = `${genreURL}${apiKey}${language}`

        getTopRatedMovies(topRatedUrl)
        getGenres(genresUrl)
        console.log(topMovies)
    }, [])

    return (
        <>
           <MovieDetails openDetails={openDetails} />
           <Header /> 
           <MovieCardsContainer moviesData={topMovies} genres={genres} setOpenDetails={setOpenDetails} />
        </>
    )
}