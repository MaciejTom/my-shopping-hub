import { createGlobalStyle } from "styled-components/macro";

export const GlobalStyles = createGlobalStyle`

* {
    box-sizing: border-box;
    font-family: "Lato", sans-serif;
}
body {
    margin: 0;
    padding: 0;
    min-height: 100vh;

    .App {
        min-height: calc(100vh - 179px);
    }   
    h1 {
        font-size: 2rem;
        font-weight: 600;
        
    }
    h3 {
        font-size: 1.1rem;
        font-weight: 600;
    }
    p {
        font-size: 1rem;        
    }   
    }
`;
