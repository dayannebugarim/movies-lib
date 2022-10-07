import { NotFoundContainer, NotFoundImg, NotFoundMessage } from "./styles";
import search from '../../assets/empty-states/search.svg'

export default function MoviesNotFound() {
    return (
        <>
            <NotFoundContainer>
                <NotFoundImg src={search} />
                <NotFoundMessage>
                    Nenhum resultado encontrado :(
                </NotFoundMessage>
            </NotFoundContainer>
        </>
    )
}