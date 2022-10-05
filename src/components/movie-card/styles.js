import styled from "styled-components";
import avengersPoster from '../../assets/posters/avengers-endgame-poster.png'

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 350px;
    width: 300px;
    background-color: var(--darkColor);
    border-radius: 20px;
    background-image: url(${avengersPoster});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border: 1px solid var(--darkColor);
    box-shadow: var(--cardShadow);
    cursor: pointer;
    transition: 300ms;

    &::before {
        content: "";
        position: absolute;
        width: 200%;
        height: 200%;
        top: -50%;
        left: -50%;
        z-index: -1;
    }

    &:hover {
        transition: 300ms;
        border: 1px solid var(--primaryColor);
        box-shadow: 0px 2px 10px 1px rgba(239, 54, 81, 0.25);
        background-size: 103%;
    }
`

export const CardInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    background: rgba(42, 44, 54, 0.7);
    border-radius: 20px;
    backdrop-filter: blur(5px);
    padding: 1rem;
    transition: 300ms;

    ${CardContainer}:hover & {
        transition: 300ms;
        background: rgba(239, 54, 81, 0.45);
    }
`

export const MovieTitle = styled.h6`
    font-size: 1.1rem;
`

export const MovieGenre = styled.span`
    color: rgba(247, 247, 247, 0.8);
`

export const RatingContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 3%;
`

export const Star = styled.img`
    height: 18px;
`

export const Rating = styled.span``