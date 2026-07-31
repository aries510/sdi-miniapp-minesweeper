import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;

   
    background: linear-gradient(
      135deg,
      #0A0A0A 0%,
      #1A1A1A 40%,
      #0F1C2E 100%
    );

   
    background-image:
      linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0.2) 100%),
      repeating-linear-gradient(
        45deg,
        rgba(255,255,255,0.02) 0px,
        rgba(255,255,255,0.02) 2px,
        rgba(0,0,0,0.05) 2px,
        rgba(0,0,0,0.05) 4px
      );

    color: ${({ theme }) => theme.uiText};
    font-family: 'Orbitron', sans-serif;
  }
`;
