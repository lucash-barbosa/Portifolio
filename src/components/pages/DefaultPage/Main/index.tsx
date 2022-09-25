import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "components/theme";
import { useRecoilValue } from "recoil";
import { themeState } from "components/state/atom";
import { 
  ContainerWrapper,
  ContentWrapper, 
  HighLight, 
  Icon, 
  Image, 
  List, 
  Paragraph, 
  Title 
} from "./styled";
import photo from "assets/imgs/photo.jpg";
import linkedinIcon from "assets/icons/social/linkedin.svg";
import gitHubIcon from "assets/icons/social/github.svg";
import instagramIcon from "assets/icons/social/instagram.svg";
import twitterIcon from "assets/icons/social/twitter.svg";

export default function Main () {
  const theme = useRecoilValue(themeState);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <ContainerWrapper id="main">
        <ContentWrapper>
          <Title>Olá, eu sou</Title>
          <HighLight>Lucas Henrique Barbosa</HighLight>
          <Paragraph>Desenvolvedor front end júnior - React, Typescript, Javascript, Html, Css</Paragraph>
          <List>
            <li>
              <a href="https://www.linkedin.com/in/lucas-h-barbosa" target="_blank" rel="noopener noreferrer"><Icon src={linkedinIcon} alt="Logo do Linkedin" /></a>
            </li>
            <li>
              <a href="https://github.com/lucash-barbosa" target="_blank" rel="noopener noreferrer"><Icon src={gitHubIcon} alt="Logo do GitHub" /></a>
            </li>
            <li>
              <a href="https://www.instagram.com/lucas_lkj/" target="_blank" rel="noopener noreferrer"><Icon src={instagramIcon} alt="Logo do Instagram" /></a>
            </li>
            <li>
              <a href="https://twitter.com/lucaslkj565" target="_blank" rel="noopener noreferrer"><Icon src={twitterIcon} alt="Logo do Twitter" /></a>
            </li>
          </List>
        </ContentWrapper>
        <Image src={photo} />
      </ContainerWrapper>
    </ThemeProvider>
  );
}