import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 430px;
`;
export const Carousel = styled.ul`
  width: 100%;
  padding: 0;
  margin: 0;
  height: 430px;
`;
export const Element = styled.div`
  list-style: none;
`;

export const ImageDesktop = styled.div`
  width: 100%;
  display: block;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const ImageMobile = styled.div`
  width: 100%;
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

export const MessegeContainer = styled.div`
  position: absolute;
  color: #fff;
`;
