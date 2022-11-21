import styled from "styled-components";

export const ContainerWrapper = styled.div`
  margin: 26vh 0;
`;  

export const Wrapper = styled.div`
  display: flex;
  margin: 0 auto;

  @media screen and (min-width: 400px) {
    width: 400px;

    .swiper-container {
      width: 400px;
    }
  }

  @media screen and (min-width: 880px) {
    width: 880px;

    .swiper-container {
      width: 880px;
    }
  }

  @media screen and (min-width: 1360px) {
    width: 1360px;

    .swiper-container {
      width: 1360px;
    }
  }

  @media screen and (min-width: 1840px) {
    width: 1840px;

    .swiper-container {
      width: 1840px;
    }
  }
`;

export const Title = styled.h2`
  color: ${props => props.theme.titles};
  font-size: 40px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 5rem;
`;

export const Card = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${porps => porps.theme.cardPortfolio};
  min-width: 340px;
  max-width: 340px;
  margin: 2rem auto;
  height: 460px;
  box-shadow: 5px 3px 20px ${props => props.theme.shadowCard};
  z-index: -2;
  -webkit-touch-callout: none;
    -webkit-user-select: none;
     -khtml-user-select: none; 
       -moz-user-select: none; 
        -ms-user-select: none;
            user-select: none;

  &:hover {
    width: 350px;
    max-width: 350px;
    height: 500px;
    margin: 0 auto;
  }
`;

export const ContentWrapper = styled.div`
  margin: 1rem 2rem;
`;

export  const CardImage = styled.img`
  position: relative;
  top: -5px;
  width: 100%;
  min-height: 35%;
  max-height: 35%;
`;

export const Info = styled.div`
  height: 130px;
`;

export const CardTitle = styled.h3`
  color: ${porps => porps.theme.titleCard};
  font-size: 28px;
  font-weight: 500;
`;

export const CardParagraph = styled.p`
  font-size: 16px;
  color: ${porps => porps.theme.paragraphCard};
  margin: 1em 0;
`;

export const Adjunct = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  height: 150px;
  padding-bottom: 1.5rem;
  justify-content: space-around;
`;

export const CardSubtitle = styled.h4`
  font-size: 16px;
  font-weight: 600;
  color: ${porps => porps.theme.titleCard};
`;

export const CardTags = styled.p`
  color: ${props => props.theme.tagsCard};
  font-size: 13px;
  font-weight: 500;
  margin: .8em 0;
`;

export const LinksWrapper = styled.div` 
`;

export const CardURL = styled.a`
  position: relative;
  color: ${props => props.theme.fontColorLinksPortfolio};
  font-size: 18px;
  font-weight: 500;
  margin-right: 1em; 
  padding: .5em .8em;
  background-color: ${props => props.theme.backgroundURLPortfolio};
  border-radius: 13px;
  background-clip: padding-box;
  border: solid 1px transparent;

  &:hover {
    background-color: transparent;
    transition: .5s;
  }

  &::before {
    display: inline-block;
    content: "";
    background-image: url(${props => props.theme.imgURLPortfolio});
    background-size: cover;
    background-repeat: no-repeat;
    width: 14px;
    height: 14px;
    margin: -.05em .4em -.05em 0;
  }
  &::after {
    content: '';
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    z-index: -1;
    margin: -1px; 
    border-radius: inherit; 
    background: ${props => props.theme.borderURLPortfolio};
  }

`;

export const CardRepository = styled.a`
  position: relative;
  color: ${props => props.theme.fontColorLinksPortfolio};
  font-size: 18px;
  font-weight: 500;
  margin-right: .5em; 
  padding: .5em .8em;
  background-color: ${props => props.theme.backgroundRepositoryPortfolio};
  border-radius: 13px;
  background-clip: padding-box;
  border: solid 1px transparent; 

  &:hover {
    background-color: transparent;
    transition: .5s;
  }

  &::before {
    display: inline-block;
    content: "";
    background-image: url(${props => props.theme.imgRepositoryPortfolio});
    background-size: cover;
    background-repeat: no-repeat;
    width: 15px;
    height: 15px;
    margin: -.05em .4em -.05em 0;
  }
  &::after {
    content: '';
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    z-index: -1;
    margin: -1px; 
    border-radius: inherit; 
    background: ${props => props.theme.borderRepositoryPortfolio};
  }
`;

export const InProgressWrapperImage = styled.div`
  display: flex;
  background: -webkit-linear-gradient(320deg, #15142e, #1f1e50);
  min-height: 35%;
  align-items: center;
  justify-content: center;
`;

export const InProgressWrapper = styled.div`
  margin: auto;
`;

export const InProgressImage = styled.img`
  height: 80px;
  -webkit-animation:spin 10s linear infinite;
    -moz-animation:spin 10s linear infinite;
  animation: spin 10s linear infinite;

  @-moz-keyframes spin { 100% { -moz-transform: rotate(360deg); } }
  @-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }
  @keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }
`; 