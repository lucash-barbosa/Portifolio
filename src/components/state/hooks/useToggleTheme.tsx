import { useRecoilValue, useSetRecoilState } from "recoil";
import { themeState } from "../atom";

export const useToggleTheme = () => {
  const theme = useRecoilValue(themeState);
  const toggleTheme = useSetRecoilState(themeState);

  return () => {
    if (theme === "light") 
      toggleTheme("dark");
    else 
      toggleTheme("light");
  };
};