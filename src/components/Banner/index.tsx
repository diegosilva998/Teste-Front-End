import * as S from "./style";
import banner from "assets/banner.svg";
import bannerMobile from "assets/bannerMobile.svg";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  return (
    <Carousel
      transitionTime={1500}
      autoPlay
      infiniteLoop
      showStatus={false}
      showThumbs={false}
    >
      <S.Element>
        <S.ImageDesktop>
          <img alt="banner" src={banner} />
        </S.ImageDesktop>
        <S.ImageMobile>
          <img alt="banner" src={bannerMobile} />
        </S.ImageMobile>
      </S.Element>
      <S.Element>
        <S.ImageDesktop>
          <img alt="banner" src={banner} />
        </S.ImageDesktop>
        <S.ImageMobile>
          <img alt="banner" src={bannerMobile} />
        </S.ImageMobile>
      </S.Element>
      <S.Element>
        <S.ImageDesktop>
          <img alt="banner" src={banner} />
        </S.ImageDesktop>
        <S.ImageMobile>
          <img alt="banner" src={bannerMobile} />
        </S.ImageMobile>
      </S.Element>
    </Carousel>
  );
};

export default Banner;
