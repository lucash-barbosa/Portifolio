import styled from "styled-components";

export const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-template-columns: 1fr 1fr;
  margin: 2rem 0;
  text-align: center;

  @media screen and (min-width: 480px) {
    margin: 2em 3rem;
  }

  @media screen and (min-width: 720px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: left;
  }

  @media screen and (min-width: 1400px) {
    grid-template-columns: .5fr 1fr;
  }
`;  

export const ContactWrapper = styled.div`
  margin: 1em 0;

  @media screen and (min-width: 480px) {
    margin: 0 2rem;
  }

  p {
    color: #64849B;
    font-size: 24px;
    font-weight: 500;
  }
`;

export const Title = styled.h2`
  color: ${props => props.theme.titles};
  font-size: 40px;
  font-weight: 400;
  margin-bottom: 1rem;
`;

export const Social = styled.div`
  margin: 0 auto;

  @media screen  {
    margin: 0;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  li {
    display: flex;
    align-items: center;
    margin-bottom: .5rem; 



    a {
      color: #64849B;
      font-size: 24px;
      font-weight: 500;

    }
  }

  @media screen and (min-width: 720px) {
    align-items: baseline;
  }
`;

export const Icon = styled.img `
  width: 28px;
  height: 28px;
  margin-right: .5em;
`;