import chain from "assets/icons/links/chain.svg";
import chainDark from "assets/icons/links/chain-dark.svg";
import githubDark from "assets/icons/links/github-dark.svg";
import github from "assets/icons/links/github.svg";

export const lightTheme = {
  backgroundColor: "-webkit-linear-gradient(360deg, #F4F4F4, #F2F2F2)",
  scrollerColor: "#a2a4ff",

  titles: "#373737",

  itemsHeader: "#597bf7",
  titleHeader: "-webkit-linear-gradient(360deg, #6f98ff, #5376ff)",
  iconShadowMain: "#DBE5FF",

  highlightAbout: "-webkit-linear-gradient(360deg, #5889ff, #0055ff)",
  paragraphAbout: "#4F4F4F",

  //portfolio
  cardPortfolio: "rgba(219, 230, 250, 70%)",
  shadowCard: "#9b9eac",
  titleCard: "#202020",
  paragraphCard: "#101010",
  tagsCard: "#384792",

  fontColorLinksPortfolio: "#000",

  imgURLPortfolio: chainDark,
  backgroundURLPortfolio: "#446fe7",
  borderURLPortfolio : "linear-gradient(to right, #4649ff, #4535cf)",

  imgRepositoryPortfolio: githubDark,
  backgroundRepositoryPortfolio: "#e2e9f7",
  borderRepositoryPortfolio: "linear-gradient(to right, #646880, #818181)",
};

export const darkTheme = {
  backgroundColor: "-webkit-linear-gradient(190deg, #0F131E, #242A3C)",
  scrollerColor: "#070711",

  titles: "#FFF", 
  
  itemsHeader: "#A9BBFF",
  titleHeader: "-webkit-linear-gradient(360deg, #96B3FF, #839CFF)",
  iconShadowMain: "#060C1C",

  highlightAbout: "-webkit-linear-gradient(360deg, #9DB9FF, #8FAFFF)",
  paragraphAbout: "#b6b6b6",

  //Portfolio
  cardPortfolio: "rgba(7, 8, 15, 45%)",
  shadowCard: "#0d1224",
  titleCard: "#FFF",
  paragraphCard: "#E0E0E0",
  tagsCard: "#48507A",

  fontColorLinksPortfolio: "#fff",

  imgURLPortfolio: chain,
  backgroundURLPortfolio: "#29378f",
  borderURLPortfolio : "linear-gradient(to right, #4431ff, #7977ff 70%)",

  imgRepositoryPortfolio: github,
  backgroundRepositoryPortfolio: "#0f121c",
  borderRepositoryPortfolio: "linear-gradient(to right, #3a3d4d, #444444)",
};