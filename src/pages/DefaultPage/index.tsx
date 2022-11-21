import Footer from "components/Footer";
import About from "./About";
import Contact from "./Contact";
import Main from "./Main";
import Portfolio from "./Portfolio";

export default function DefaultPage () {
  return (
    <>
      <Main />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}