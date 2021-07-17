import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  max-width: 1920px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoImage = styled.img`
  width: 170px;
  height: 41px;
  margin: 10px 50px;
  @media (max-width: 768px) {
    width: 109px;
    height: 41px;
    margin: 0;
  }
`;

export const SeachBar = styled.input`
  border: none;
  outline: none;
  width: 80%;
  font-family: Nunito;
  @media (max-width: 768px) {
    width: 302%;
  }
`;

export const SeachContainer = styled.div`
  height: 30px;
  width: 40%;
  border-bottom: 1px solid gray;
  display: flex;
  justify-content: space-between;
  margin-right: 30px;
  @media (max-width: 768px) {
    height: 25px;
    width: 80%;
    margin: 0;
    justify-content: space-space-around;
  }
`;

export const SeachIconImage = styled.img`
  width: 18px;
  height: 18px;
`;

export const MenuContainer = styled.div`
  width: 14%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-around;
  }
`;

export const Account = styled.div`
  font-family: Nunito;
  font-weight: 400;
  font-size: 13px;
  margin-right: 15px;
`;

export const UserIconImage = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 8px;
`;

export const ButtonIcon = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const CartIconImage = styled.img``;

export const Mobile = styled.div`
  width: 100%;
  display: none;
  @media (max-width: 768px) {
    display: block;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Desktop = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;
