import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body{
    font-family: 'Open Sans Condensed';
    padding: 20px 60px;

    @media screen    and (max-width: 800px)  {
        padding: 10px;
    }

    @media only screen and (min-width: 375px) and (max-height: 667px)  { 
        padding: 1px;
      }

}

a{
    text-decoration: none;
    color: dodgerblue;
}


*{
    box-sizing: border-box;
}
`;