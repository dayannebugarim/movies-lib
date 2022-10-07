import styled from "styled-components";

export const DarkerBackground = styled.div`
    display: ${props => props.open ? 'block' : 'none'};

    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 98;
    background: rgba(0, 0, 0, 0.4);
`

export const CloseIcon = styled.img``

export const CloseButton = styled.button`
    z-index: 100;
    position: fixed;
    top: -7%;
    right: 0%;
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    color: var(--whiteColor);
    font-weight: 500;
`;

export const ModalContainer = styled.div`
    //display: ${props => props.open ? 'block' : 'none'};
    display: flex;
    z-index: 99;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--darkColor);
    width: 50vw;
    min-height: 50vh;
    border-radius: 20px;
    border: 1px solid var(--darkColor);
    box-shadow: var(--cardShadow);
    gap: 2%;
`

export const PosterImg = styled.img`
    height: 50vh;
    border-radius: 20px;
`
export const InfosContainer = styled.div`
    padding: 0% 2% 2% 0%;
    width: 100%;
`

export const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    //border: 1px solid red;
    padding: 4% 0;
    border-bottom: 1px solid rgba(171, 180, 189, 0.15);
`

export const MovieInfos = styled.div`` 

export const MovieTitle = styled.h2`
    margin-bottom: 1.5%;
    color: var(--primaryColor);
    font-size: 1.4rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
`

export const MovieInfoDetails = styled.span`
    color: var(--grayColor);
    font-size: 0.9rem;
`

export const MovieRating = styled.div`
    display: flex;
    align-items: center;
    gap: 3%;
`

export const Star = styled.img`
    height: 16px;
`

export const Rating = styled.span`
    font-size: 0.9rem;
`

export const ModalDescription = styled.div`
    //border: 1px solid red;
    margin-top: 4%;
`

export const OverviewTitle = styled.h5`
    margin-bottom: 1.5%;
`

export const OverviewText = styled.p`
    line-height: 1.6rem;
    text-align: justify;
`