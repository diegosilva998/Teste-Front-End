import logo from "assets/logo.svg";
import searchIcon from "assets/searchIcon.svg";
import userIcon from "assets/userIcon.svg";
import cartIcon from "assets/cartIcon.svg";
import * as S from "./style";

const Header = () => {
  return (
    <S.Header>
      <S.LogoImage alt="corebiz logo" src={logo} />
      <S.SeachContainer>
        <S.SeachBar placeholder={"O que está procurando?"} />
        <S.SeachIconImage alt="search icon" src={searchIcon} />
      </S.SeachContainer>
      <S.MenuContainer>
        <S.UserIconImage alt="icone de usuario" src={userIcon} />
        <S.Account>Minha Conta</S.Account>
        <S.ButtonIcon>
          <S.CartIconImage
            alt="icone de carrinho"
            src={cartIcon}
          ></S.CartIconImage>
        </S.ButtonIcon>
      </S.MenuContainer>
    </S.Header>
  );
};
export default Header;
