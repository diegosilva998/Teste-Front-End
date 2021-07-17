import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  height: 501px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
`;
export const SliderContainer = styled.div`
  width: 70%;
  height: 501px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const ProductsContainer = styled.div`
  padding: 0;
  margin: 0;
  list-style: none;
  width: 216px;
  height: 353px;
  display: flex;
  flex-direction: column;
`;

export const Product = styled.div`
  width: 100%;
  height: 353px;
  margin: 0 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProductName = styled.span`
  font-family: Nunito;
  font-weight: 600;
  font-size: 12px;
  margin: 0;
`;

export const ProductListPrice = styled.div`
  height: 12px;
  font-family: Nunito;
  font-weight: 400;
  font-size: 12px;
  margin: 0;
  text-decoration: line-through;
`;

export const ProductInstallments = styled.div`
  height: 11px;
  font-family: Nunito;
  font-weight: 400;
  font-size: 11px;
  margin-bottom: 5px;
`;

export const ProductPrice = styled.div`
  font-family: Nunito;
  font-weight: bold;
  font-size: 18px;
  margin: 5px 0;
`;

export const Rating = styled.div``;

export const ProductImage = styled.img`
  width: 200px;
  height: 200px;
`;

export const ButtonBuy = styled.button`
  background-color: #000;
  color: #fff;
  border-radius: 8px;
  border: none;
  width: 125px;
  height: 32px;
  display: none;
`;
export const HoverContainer = styled.div`
  padding: 5px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    & button {
      display: block;
    }
  }
  @media (min-width: 769px) {
    :hover {
      background-color: #ccc;
      & button {
        display: block;
      }
    }
  }
`;
