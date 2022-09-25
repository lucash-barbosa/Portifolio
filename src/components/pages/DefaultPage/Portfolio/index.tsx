import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "components/theme";
import { useRecoilValue } from "recoil";
import { themeState } from "components/state/atom";
import { 
  ContainerWrapper,
  Title, 
  Card,
  CardImage,
  CardTitle,
  CardParagraph,
  CardSubtitle,
  CardTags,
  CardURL,
  CardRepository,
  LinksWrapper,
  Wrapper,
  ContentWrapper,
  Info,
  Adjunct,
  InProgressWrapper, 
  InProgressImage,
  InProgressWrapperImage,
} from "./styled";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import "./carousel.css";
import casaVerde from "assets/imgs/covers/casa-verde.png";
import amigoSecreto from "assets/imgs/covers/amigo-secreto.png";
import aluroni from "assets/imgs/covers/aluroni.png";
import portifolio from "assets/imgs/covers/portifolio.png";
import gear from "assets/icons/gear.svg";

export default function Portfolio () {
  const theme = useRecoilValue(themeState);

  const [repositories, setRepositories] = useState<any[]>([]);

  let id = -1;

  const cover = [ aluroni, amigoSecreto, casaVerde, portifolio];
  
  useEffect(() => {
    fetch("https://api.github.com/users/lucash-barbosa/repos")
      .then(Response => Response.json())
      .then(data => setRepositories(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <ContainerWrapper>
        <Title id="portfolio">Projetos</Title>
        <Wrapper>
          <Swiper
            slidesPerView={1}
            spaceBetween={100}
            freeMode={true}
            modules={[FreeMode, Pagination]}
            pagination={{
              dynamicBullets: true,
            }}
            className="mySwiper"
            breakpoints={{
              1840: {
                slidesPerView: 4,
              },
              1360: {
                slidesPerView: 3,
              },
              880: {
                slidesPerView: 2,
              },
            }}
          >
            {repositories.map((repository, index) => {
              if (repository.name === "Aluroni" || repository.name === "Amigo-Secreto" || repository.name === "Casa-Verde" || repository.name === "Portifolio") {
                id += 1;
                return (
                  <SwiperSlide key={index}>
                    <Card>
                      <CardImage src={cover[id]} alt={repository.name} />
                      <ContentWrapper>
                        <Info>
                          <CardTitle>{repository.name}</CardTitle>
                          <CardParagraph>{repository.description}</CardParagraph>
                        </Info>

                        <Adjunct>
                          <CardSubtitle>Tags</CardSubtitle>
                          <CardTags>{repository.topics.join(" | ").toUpperCase()}</CardTags>

                          <LinksWrapper>
                            <CardURL href={repository.homepage} target="_blank" rel="noopener noreferrer">Visualizar</CardURL>
                            <CardRepository href={repository.html_url} target="_blank" rel="noopener noreferrer">GitHub</CardRepository>
                          </LinksWrapper>
                        </Adjunct>
                      </ContentWrapper>
                    </Card>
                  </SwiperSlide>
                );
              }
            })}
            <SwiperSlide>
              <Card>
                <InProgressWrapperImage>
                  <InProgressImage src={gear} alt="Projeto em desenvolvimento" />
                </InProgressWrapperImage>
                <InProgressWrapper>
                  <CardTitle>Em desenvolvimento</CardTitle>
                </InProgressWrapper>
              </Card>
            </SwiperSlide>
          </Swiper>
        </Wrapper>
      </ContainerWrapper>
    </ThemeProvider>
  );
}