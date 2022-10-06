import { CardContainer, CardInfoContainer, MovieTitle, MovieGenre, RatingContainer, Star, Rating } from './styles'
import star from '../../assets/icons/star.svg'
import { imgURL } from "../../services/api";

export default function MovieCard({ movieTitle, movieVoteAverage, moviePosterPath }) {
    
    return (
        <>
            <CardContainer posterURL={imgURL + moviePosterPath}>
                <CardInfoContainer>
                    <MovieTitle>
                        {movieTitle}
                    </MovieTitle>
                    <MovieGenre>
                        Suspense/Terror
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