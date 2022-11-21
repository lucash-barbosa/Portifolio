import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "components/theme";
import { useRecoilValue } from "recoil";
import { themeState } from "components/state/atom";
import { 
  ContainerWrapper,
  ContentWrapper, 
  Title, 
  HighLight, 
  Paragraph, 
  Topic,
  List, 
  Icon, 
  Image, 
} from "./styled";
import notebook from "assets/imgs/notebook.png";
import html from "assets/icons/skills/html.svg";
import css from "assets/icons/skills/css.svg";
import js from "assets/icons/skills/js.svg";
import ts from "assets/icons/skills/ts.svg";
import react from "assets/icons/skills/react.svg";
import jest from "assets/icons/skills/jest.svg";
import sass from "assets/icons/skills/sass.svg";
import git from "assets/icons/skills/git.svg";


export default function About () {
  const theme = useRecoilValue(themeState);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <ContainerWrapper id="about">
        <Image src={notebook} />
        <ContentWrapper>
          <Title>Sobre mim</Title>
          <HighLight>São José, Santa Catarina</HighLight>
          <Paragraph>Tenho experiência no setor de TI, onde desenvolvi meu interesse por programação. Desde então venho estudando e me desenvolvendo com o objetivo de atuar na área de desenvolvimento de software web</Paragraph>
          <Topic>Skills</Topic>
          <List>
            <li>
              <Icon src={html} alt="Logo do HTML" />
            </li>
            <li>
              <Icon src={css} alt="Logo do CSS" />
            </li>
            <li>
              <Icon src={js} alt="Logo do Javascript" />
            </li>
            <li>
              <Icon src={ts} alt="Logo do Typescript" />
            </li>
            <li>
              <Icon src={react} alt="Logo do React" />
            </li>
            <li>
              <Icon src={jest} alt="Logo do Jest" />
            </li>
            <li>
              <Icon src={sass} alt="Logo do SASS" />
            </li>
            <li>
              <Icon src={git} alt="Logo do GIT" />
            </li>
          </List>
        </ContentWrapper>
      </ContainerWrapper>
    </ThemeProvider>
  );
}