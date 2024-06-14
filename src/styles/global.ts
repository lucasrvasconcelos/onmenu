import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    * 
    {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    body {
        background-color: ${(props) => props.theme.colors.background};

        &:hover {
            background-color: ${(props) => props.theme.colors.secondary};
            transition: all .3s hover;
        }
    }
`
