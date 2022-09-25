import {createGlobalStyle, } from "styled-components";

type Props = {
  theme: {
    backgroundColor: string
    scrollerColor: string
    
  }
}

export const GlobalStyle = createGlobalStyle`
  * {
    text-decoration: none;
    list-style: none;
    color: #000;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Ubuntu', sans-serif;
    font-size: 24px;
    font-weight: 400;
    background: ${(props: Props) => props.theme.backgroundColor}
  }

  ::-webkit-scrollbar {
    width: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background: ${(props: Props) =>  props.theme.backgroundColor};
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${(props: Props) => props.theme.scrollerColor};
    border-radius: 20px;
  }
`;