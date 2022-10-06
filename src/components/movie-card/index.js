import { CardContainer, CardInfoContainer, MovieTitle, MovieGenre, RatingContainer, Star, Rating } from './styles'
import star from '../../assets/icons/star.svg'
import { imgURL } from "../../services/api";
import { useState } from 'react';

export default function MovieCard({ movieTitle, movieVoteAverage, moviePosterPath, setOpenDetails, movieGenreIds, genres }) {    
    const genresArr = [];

    movieGenreIds.map(movieGenre => {
        //console.log(movieGenre)
        const teste = genres?.filter(genre => genre.id === movieGenre )
        genresArr.push(teste[0]?.name)
    })
    
    
    return (
        <>
            <CardContainer onClick={() => setOpenDetails(true)} posterURL={imgURL + moviePosterPath}>
                <CardInfoContainer>
                    <MovieTitle>
                        {movieTitle}
                    </MovieTitle>
                    <MovieGenre>
                        {`${genresArr.slice(0, 2)}`}
                    </MovieGenre>
                    <RatingContainer>
                        <Star src={star} />
                        <Rating>{movieVoteAverage}</Rating>
                    </RatingContainer>
                </CardInfoContainer>
            </CardContainer>
        </>
    )
}