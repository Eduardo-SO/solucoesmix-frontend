import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    *:focus {
    outline: 0;
    }

    #root, html, body {
        height: 100%;
    }

    body {
        -webkit-font-smoothing: antialiased;
    }

    body, button, input {
        font: 14px 'Roboto', sans-serif;
    }

    button {
        cursor: pointer;
        border: none;
    }

    input{
        border: none;
    }

    input[type='submit'] {
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }
`;
