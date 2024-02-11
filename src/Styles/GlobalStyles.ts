import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    font-family:'Roboto',sans-serif;
    scrollbar-width: thin;
    scrollbar-color: rgba(100,100,100,0.5);
  }
  *::-webkit-scrollbar {
    width: 22px;
  }
  *::-webkit-scrollbar-track {
    background: rgba(0,0,0);
  }

  *::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255);
    border-radius: 20px;
    border: 1px solid rgba(0,0,0);
  }
  * {
  scrollbar-width: thin;
  scrollbar-color: black ${Props => Props.theme.colors.pri};
}
`
export default GlobalStyle;
