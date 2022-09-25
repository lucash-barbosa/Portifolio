import styled from "styled-components";

export const ContainerWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 60vh;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (min-width: 1400px) {
    flex-direction: row;
    margin: 26vh 0;
  }
`;  

export const ContentWrapper = styled.div`
  width: 90vw;

  @media screen and (min-width: 1400px) {
    width: 30vw;
  }
`;

export const Title = styled.h2`
  color: ${props => props.theme.titles};
  font-size: 40px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 5rem;
`;

export const HighLight = styled.h3`
  font-size: 24px;
  font-weight: 700;
  margin: 1rem 0;
  background-image: ${porps => porps.theme.highlightAbout}; 
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Paragraph = styled.p`
  color: ${props => props.theme.paragraphAbout};
  font-size: 24px;
  font-weight: 500;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const Icon = styled.img `
  width: 54px;
  height: 54px;
  margin: .2em .25em .5em .25em;

  &:hover {
  width: 60px;
  height: 60px;
  margin: 0 3px 0 3px;
  }
`;

export const Topic = styled.h3 `
  color: ${props => props.theme.titles};
  font-weight: 700;
  margin: .5em 0;
`;

export const Image = styled.img`
  position: absolute;
  top: 110%;
  width: 100vw;

  @media screen and (min-width: 630px) {
    width: 622px;
    height: 511px;
  }

  @media screen and (min-width: 1400px) {
    position: static;
  }
`;