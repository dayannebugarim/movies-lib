import React from "react";
import MovieCard from "../movie-card";
import { CardsContainer } from "./styles";

export default function MovieCardsContainer(props) {
    return (
        <>
            <CardsContainer>
                {props.moviesData && props.moviesData.map((movie) => {
                    return <MovieCard movieTitle={movie.title} movieVoteAverage={movie.vote_average} moviePosterPath={movie.poster_path} />
                })}
            </CardsContainer>
        </>
    )
}