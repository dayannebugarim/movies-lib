import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

    :root {
        --primaryColor: #EF3651;
        --backgroundColor: #1E1F28;
        --darkColor: #2A2C36;
        --whiteColor: #F6F6F6;
        --grayColor: #ABB4BD;
        --starColor: #FFBA49;

        --robotoFont: 'Roboto', sans-serif;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: var(--robotoFont);
    }

    body {
        background: var(--backgroundColor);
        color: var(--whiteColor);
    }
`;

export default GlobalStyles;