import { CardContainer, CardInfoContainer, MovieTitle, MovieGenre, RatingContainer, Star, Rating } from './styles'
import star from '../../assets/icons/star.svg'

export default function MovieCard() {
    return (
        <>
            <CardContainer>
                <CardInfoContainer>
                    <MovieTitle>
                        Avengers: Endgame
                    </MovieTitle>
                    <MovieGenre>
                        Suspense/Terror
                    </MovieGenre>
                    <RatingContainer>
                        <Star src={star} />
                        <Rating>6.7</Rating>
                    </RatingContainer>
                </CardInfoContainer>
            </CardContainer>
        </>
    )
}