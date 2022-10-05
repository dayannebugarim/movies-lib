import styled from "styled-components";
import searchIcon from '../../assets/icons/search.svg'

export const SearchContainer = styled.div`
    //border: 1px solid red;
`;

export const SearchInput = styled.input`
    width: 20vw;
    background: var(--darkColor);
    border: none;
    color: var(--whiteColor);
    border-radius: 100px 0 0 100px;
    padding: 1rem 1rem 1rem 2.8rem;
    background-image: url(${searchIcon});
    background-repeat: no-repeat;
    background-position: 1rem center;
`;