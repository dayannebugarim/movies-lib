import { CardContainer, CardInfoContainer, MovieTitle, MovieGenre, RatingContainer, Star, Rating } from './styles'
import MovieDetails from '../movie-details';
import star from '../../assets/icons/star.svg'
import sorry from '../../assets/empty-states/sorry.svg'
import { imgURL } from "../../services/api";
import { useState } from 'react';

export default function MovieCard({ id, key, movieTitle, movieVoteAverage, moviePosterPath, movieGenreIds, genres, movieReleaseDate, movieOverview }) {    
    const [openDetails, setOpenDetails] = useState(false);

    const genresArr = [];

    movieGenreIds.map(movieGenre => {
        //console.log(movieGenre)
        const teste = genres?.filter(genre => genre.id === movieGenre )
        genresArr.push(teste[0]?.name)
    })
    
    
    return (
        <>
            <CardContainer id={id} key={key} onClick={() => setOpenDetails(true)} posterURL={moviePosterPath ? imgURL + moviePosterPath : sorry}>
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

            <MovieDetails openDetails={openDetails} setOpenDetails={setOpenDetails} movieReleaseDate={movieReleaseDate} movieOverview={movieOverview} movieTitle={movieTitle} movieVoteAverage={movieVoteAverage} moviePosterPath={moviePosterPath} genres={genres} movieGenreIds={movieGenreIds} />
        </>
    )
}