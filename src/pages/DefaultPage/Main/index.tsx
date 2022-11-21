import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "components/theme";
import { useRecoilValue } from "recoil";
import { themeState } from "components/state/atom";
import { 
  ContainerWrapper,
  ContentWrapper, 
  HighLight, 
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
import Icon from "components/Icon";

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
            <Icon 
              path="https://www.linkedin.com/in/lucas-h-barbosa" 
              icon={linkedinIcon} 
              alt="Logo do Linkedin" 
            />
            <Icon 
              path="https://github.com/lucash-barbosa" 
              icon={gitHubIcon} 
              alt="Logo do Linkedin" 
            />
            <Icon 
              path="https://www.instagram.com/lucas_lkj" 
              icon={instagramIcon} 
              alt="Logo do Instagram" 
            />
            <Icon 
              path="https://twitter.com/lucaslkj565" 
              icon={twitterIcon} 
              alt="Logo do Twitter" 
            />
          </List>
        </ContentWrapper>
        <Image src={photo} />
      </ContainerWrapper>
    </ThemeProvider>
  );
}