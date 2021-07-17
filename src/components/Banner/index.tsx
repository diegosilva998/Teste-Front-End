import * as S from "./style";
import banner from "assets/banner.svg";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  return (
    <Carousel transitionTime={1500} autoPlay infiniteLoop showStatus={false}>
      <S.Element>
        <S.Image alt="banner" src={banner}></S.Image>
      </S.Element>
      <S.Element>
        <S.Image alt="banner" src={banner}></S.Image>
      </S.Element>
      <S.Element>
        <S.Image alt="banner" src={banner}></S.Image>
      </S.Element>
      <S.Element>
        <S.Image alt="banner" src={banner}></S.Image>
      </S.Element>
    </Carousel>
  );
};

export default Banner;
