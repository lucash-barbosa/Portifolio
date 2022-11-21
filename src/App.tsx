import Header from "components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { themeState } from "components/state/atom";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "components/theme";
import { GlobalStyle } from "GlobalStyle";
import DefaultPage from "pages/DefaultPage";

function App() {
  const theme = useRecoilValue(themeState);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Router>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<DefaultPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
