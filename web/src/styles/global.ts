import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box
  }

  body {
    background-color: #312E38;
    color: white;
  }

  body, input, button {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
<<<<<<< HEAD
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

`;

export default GlobalStyle;
=======
    font-weight: normal;
  }

  h1, h2, h3, h4, h5, h6 , strong {
    font-weight: 500;
    }
`;
>>>>>>> bfd96da22804443d34b982728d7df8b9dfbd6699
