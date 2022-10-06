import React from "react";
import MovieCard from "../movie-card";
import { CardsContainer } from "./styles";

export default function MovieCardsContainer({ moviesData, setOpenDetails, genres }) {
    return (
        <>
            <CardsContainer>
                {moviesData && moviesData.map((movie) => {
                    return <MovieCard key={movie.id} movieTitle={movie.title} movieVoteAverage={movie.vote_average} moviePosterPath={movie.poster_path} setOpenDetails={setOpenDetails} genres={genres} movieGenreIds={movie.genre_ids} />
                })}
            </CardsContainer>
        </>
    )
}