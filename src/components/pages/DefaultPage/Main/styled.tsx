import styled from "styled-components";

export const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 27vh auto;
  justify-content: space-evenly;
  width: fit-content;
  text-align: center;

  @media screen and (min-width: 940px) {
    flex-direction: row;
    text-align: left;
  }
`;  

export const ContentWrapper = styled.div`
  width: 90%;
  margin: 0 auto;

  @media screen and (min-width: 580px) {
    width: 50%;
  }

  @media screen and (min-width: 940px) {
    margin: 0;
  }

  @media screen and (min-width: 1200px) {
    width: 50vw;
  }
`;

export const Title = styled.h2`
  color: ${props => props.theme.titles};
  font-size: 40px;
  font-weight: 400;
`;

export const HighLight = styled.h3`
  font-size: 64px;
  font-weight: 700;
  margin: 1rem 0;
  background-image: -webkit-linear-gradient(360deg, #5EA8FF, #3E8BFF); 
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (min-width: 1400px) {
    width: 70%;
  }

`;

export const Paragraph = styled.p`
  color: #969696;
  font-size: 20px;

  @media screen and (min-width: 940px) {
    width: 70%;
  }

  @media screen and (min-width: 1400px) {
    width: max-content;
  }
`;

export const List = styled.ul`
  display: flex;
  width: fit-content;
  margin: 0 auto;

  li {
    background-color: ${props => props.theme.iconShadowMain};
    background-size: cover;
    margin: .5em .5em;
    padding: .4em .4em .15em .4em;
    border-radius: 50%;

  }

  @media screen and (min-width: 940px) {
    margin: 0 0;
  }
`;

export const Icon = styled.img `
  width: 28px;
  height: 28px;
`;

export const Image = styled.img`
  width: 302px;
  height: 302px;
  border-radius: 50%;
  margin: 2em auto;

  @media screen and (min-width: 940px) {
    margin: 0;
    box-shadow: 90px -80px 10px rgba(0, 0, 0, .1);
  }

  @media screen and (min-width: 1400px) {
    margin: 0 5rem;
  }
`;