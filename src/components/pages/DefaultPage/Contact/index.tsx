import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "components/theme";
import { useRecoilValue } from "recoil";
import { themeState } from "components/state/atom";
import { 
  ContainerWrapper,
  ContactWrapper, 
  Icon, 
  List, 
  Title, 
  Social
} from "./styled";
import linkedinIcon from "assets/icons/social/linkedin.svg";
import gitHubIcon from "assets/icons/social/github.svg";
import instagramIcon from "assets/icons/social/instagram.svg";
import twitterIcon from "assets/icons/social/twitter.svg";

export default function Contact () {
  const theme = useRecoilValue(themeState);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <ContainerWrapper id="contact">
        <ContactWrapper>
          <Title>Contate-me</Title>
          <p>lucash565dev@gmail.com</p>
        </ContactWrapper>
        <Social>
          <Title>Redes Sociais</Title>
          <List>
            <li>
              <a href="https://www.linkedin.com/in/lucas-h-barbosa" target="_blank" rel="noopener noreferrer"><Icon src={linkedinIcon} alt="Logo do Linkedin" />Linkedin</a>
            </li>
            <li>
              <a href="https://github.com/lucash-barbosa" target="_blank" rel="noopener noreferrer"><Icon src={gitHubIcon} alt="Logo do GitHub" />GitHub</a>
            </li>
            <li>
              <a href="https://www.instagram.com/lucas_lkj/" target="_blank" rel="noopener noreferrer"><Icon src={instagramIcon} alt="Logo do Instagram" />Instagram</a>
            </li>
            <li>
              <a href="https://twitter.com/lucaslkj565" target="_blank" rel="noopener noreferrer"><Icon src={twitterIcon} alt="Logo do Twitter" />Twitter</a>
            </li>
          </List>
        </Social>
      </ContainerWrapper>
    </ThemeProvider>
  );
}