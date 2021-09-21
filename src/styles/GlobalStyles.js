import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    ::-webkit-scrollbar {
        display: none;
    }
    body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Lato', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #3F5873;
`;

export default GlobalStyle;
