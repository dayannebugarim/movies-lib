import styled from "styled-components";

export const DropdownContainer = styled.div``;

export const Select = styled.select`
    height: 100%;
    //appearance: none;
    padding: 0.99rem;
    background: var(--darkColor);
    border: none;
    color: var(--whiteColor);
    border-radius: 0px 100px 100px 0px;
    border-left: 1px solid var(--backgroundColor);

    &:focus {
        border-radius: 0px 25px 0px 0px;
        border-bottom: 1px solid var(--backgroundColor);
    }
`;

export const Option = styled.option`
    background: var(--darkColor);

    &:hover {
        background-color: red;
    }
`;