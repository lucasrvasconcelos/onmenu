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
`
