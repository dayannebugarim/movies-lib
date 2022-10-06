import React from "react";
import MovieCard from "../movie-card";
import { CardsContainer } from "./styles";

export default function MovieCardsContainer({ moviesData, setOpenDetails, genres, genreId, filteredMovies }) {
    return (
        <>
            <CardsContainer>
                {genreId === '0' || !filteredMovies ? 
                    moviesData && moviesData.map((movie) => ( <MovieCard key={movie.id} movieTitle={movie.title} movieVoteAverage={movie.vote_average} moviePosterPath={movie.poster_path} setOpenDetails={setOpenDetails} genres={genres} movieGenreIds={movie.genre_ids} />
                    )) :

                    filteredMovies && filteredMovies.map((movie) => ( <MovieCard key={movie.id} movieTitle={movie.title} movieVoteAverage={movie.vote_average} moviePosterPath={movie.poster_path} setOpenDetails={setOpenDetails} genres={genres} movieGenreIds={movie.genre_ids} />
                    ))
                }
                {/* {moviesData && moviesData.map((movie) => {
                    return <MovieCard key={movie.id} movieTitle={movie.title} movieVoteAverage={movie.vote_average} moviePosterPath={movie.poster_path} setOpenDetails={setOpenDetails} genres={genres} movieGenreIds={movie.genre_ids} />
                })} */}
            </CardsContainer>
        </>
    )
}