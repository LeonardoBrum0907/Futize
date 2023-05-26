import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: linear-gradient(90deg, rgba(28,28,28,1) 47%, rgba(107,107,107,1) 100%);
        // background: ${(props) => props.theme.background};
        color: ${(props) => props.theme.text};
        -webkit-font-smoothing: antialiased;
        max-width: 1900px;
        margin: 0 auto;
        border: 1px solid black;
        box-shadow: 10px 10px 100px black;
    }

    h1 {
        font-family: 'Montserrat', sans-serif;
        text-transform: uppercase;
        font-size: 4rem;
        line-height: 3.5rem;
    }

    body, input, textarea {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    button {
        font-size: 1.2rem;
        border: none;
    }
`
