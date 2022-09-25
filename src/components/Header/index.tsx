import { themeState } from "components/state/atom";
import { useToggleTheme } from "components/state/hooks/useToggleTheme";
import { darkTheme, lightTheme } from "components/theme";
import { useRecoilValue } from "recoil";
import { ThemeProvider } from "styled-components";
import { 
  Wrapper, 
  Title,
  Items, 
  CheckBoxWrapper,
  CheckBox, 
  CheckBoxLabel,
  Navigation,
} from "./styled";

export default function Header () {
  
  const toggleTheme = useToggleTheme();
  const theme = useRecoilValue(themeState);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme }>
      <Wrapper>
        <Title>{"<Lucash.dev>"}</Title>

        <div>
          <Navigation>
            <li><Items href="#main">Início</Items></li>
            <li><Items href="#about">Sobre</Items></li>
            <li><Items href="#portfolio">Projetos</Items></li>
            <li><Items href="#contact">Contato</Items></li>
          </Navigation>

          <div>
            <CheckBoxWrapper>
              <CheckBox id="checkbox" type="checkbox" onChange={() => toggleTheme()} />
              <CheckBoxLabel htmlFor="checkbox" />
            </CheckBoxWrapper>
          </div>
        </div>
      
      </Wrapper>
    </ThemeProvider>
  );
}