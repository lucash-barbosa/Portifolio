import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "components/theme";
import { useRecoilValue } from "recoil";
import { themeState } from "components/state/atom";
import { 
  Title, 
} from "./styled";

export default function Footer () {
  const theme = useRecoilValue(themeState);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Title>© Criado por Lucas Henrique Barbosa</Title>
    </ThemeProvider>
  );
}