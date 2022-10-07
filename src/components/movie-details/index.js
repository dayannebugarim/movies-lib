import { useEffect, useState } from "react"
import { DarkerBackground, CloseIcon, CloseButton, ModalContainer, PosterImg, InfosContainer, ModalHeader, MovieInfos, MovieTitle, MovieInfoDetails, MovieRating, Star, Rating, ModalDescription, OverviewText } from "./styles"
import star from '../../assets/icons/star.svg'
import close from '../../assets/icons/close.svg'
import { imgURL } from "../../services/api";

export default function MovieDetails({ openDetails, setOpenDetails, movieId, key, movieTitle, movieVoteAverage, moviePosterPath, movieGenreIds, genres, movieReleaseDate, movieOverview }) {    
    const genresArr = [];

    movieGenreIds?.map(movieGenre => {
        const teste = genres?.filter(genre => genre.id === movieGenre )
        genresArr.push(teste[0]?.name)
    })

    const releaseYear = movieReleaseDate.split('-')[0]

    return (
        <>
            <DarkerBackground open={openDetails}>
                <ModalContainer>
                    <CloseButton onClick={() => setOpenDetails(false)}>
                        <CloseIcon src={close} />
                    </CloseButton>
                    <PosterImg src={imgURL + moviePosterPath} />
                    <InfosContainer>
                        <ModalHeader>
                            <MovieInfos>
                                <MovieTitle>{movieTitle}</MovieTitle>
                                <MovieInfoDetails>
                                    {releaseYear} - {`${genresArr.slice(0, 2)}`}
                                </MovieInfoDetails>
                            </MovieInfos>
                            <MovieRating>
                                <Star src={star} />
                                <Rating>{movieVoteAverage}</Rating>
                            </MovieRating>
                        </ModalHeader>
                        <ModalDescription>
                            {/* <OverviewTitle>Sinopse</OverviewTitle> */}
                            <OverviewText>{movieOverview}</OverviewText>
                        </ModalDescription>
                    </InfosContainer>
                </ModalContainer>
            </DarkerBackground>
        </>
    )
}