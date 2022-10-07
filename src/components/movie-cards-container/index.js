import React from "react";
import MovieCard from "../movie-card";
import MoviesNotFound from "../movies-not-found";
import { CardsContainer } from "./styles";

export default function MovieCardsContainer({ moviesData, setOpenDetails, genres, genreId, filteredMovies }) {
    console.log(moviesData.length)
    console.log(filteredMovies.length)
    return (
        <>
            <CardsContainer>
                {
                    moviesData.length === 0 ? <MoviesNotFound /> :

                    genreId === '0' || !filteredMovies ? 

                    moviesData && moviesData.map((movie) => ( <MovieCard movieId={movie.id} key={movie.id} movieTitle={movie.title} movieVoteAverage={movie.vote_average} moviePosterPath={movie.poster_path} movieReleaseDate={movie.release_date} movieOverview={movie.overview} setOpenDetails={setOpenDetails} genres={genres} movieGenreIds={movie.genre_ids} />
                    )) : 
                    
                    filteredMovies.length === 0 ?  <MoviesNotFound /> :

                    filteredMovies && filteredMovies.map((movie) => ( <MovieCard movieId={movie.id} key={movie.id} movieTitle={movie.title} movieVoteAverage={movie.vote_average} moviePosterPath={movie.poster_path} movieReleaseDate={movie.release_date} movieOverview={movie.overview} setOpenDetails={setOpenDetails} genres={genres} movieGenreIds={movie.genre_ids} />
                    ))
                }
            </CardsContainer>
        </>
    )
}