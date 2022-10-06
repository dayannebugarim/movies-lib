import styled from "styled-components";

export const DarkerBackground = styled.div`
    display: ${props => props.open ? 'block' : 'none'};

    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 98;
    background: rgba(0, 0, 0, 0.4);
`

export const CloseButton = styled.button`
    z-index: 100;
    position: fixed;
    top: -10%;
    right: 0%;
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: var(--whiteColor);
`;

export const ModalContainer = styled.div`
    //display: ${props => props.open ? 'block' : 'none'};

    z-index: 99;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--darkColor);
    width: 50vw;
    height: 20vw;
    border-radius: 20px;
    box-shadow: var(--cardShadow);
`