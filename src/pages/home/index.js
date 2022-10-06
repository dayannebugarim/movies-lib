import { useState, useEffect } from 'react'
import Header from '../../components/header'
import MovieCardsContainer from '../../components/movie-cards-container'
import logo from '../../logo.svg'
import { moviesURL, apiKey } from '../../services/api'

export default function Home() {
    //console.log(moviesURL, apiKey)

    const [topMovies, setTopMovies] = useState([])

    const getTopRatedMovies = async (url) => {
        const res = await fetch(url)
        const data = await res.json()
        
        setTopMovies(data.results)
    }
    
    useEffect(() => {
        const topRatedUrl = `${moviesURL}top_rated?${apiKey}`

        getTopRatedMovies(topRatedUrl)
        console.log(topMovies)
    }, [])

    return (
        <>
           <Header /> 
           <MovieCardsContainer moviesData={topMovies} />
        </>
    )
}