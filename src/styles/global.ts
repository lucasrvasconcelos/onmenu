import { createGlobalStyle } from 'styled-components'
import '@radix-ui/themes/styles.css'

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
    }

    a {
    color: ${(props) => props.theme.colors.black};
    text-decoration: none;
    font-size: 14px;
    color: ${(props) => props.theme.colors.primary};
    }

    img {
        user-select: none;
    }
`
