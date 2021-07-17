import logo from "assets/logo.svg";
import searchIcon from "assets/searchIcon.svg";
import userIcon from "assets/userIcon.svg";
import cartIcon from "assets/cartIcon.svg";
import menuIcon from "assets/menuIcon.svg";
import * as S from "./style";
import Badge from "@material-ui/core/Badge";
import { Theme, withStyles, createStyles } from "@material-ui/core/styles";
import { Menu, MenuItem, Button } from "@material-ui/core";

import { useState } from "react";

const StyledBadge = withStyles((theme: Theme) =>
  createStyles({
    badge: {
      right: -15,
      top: 10,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  })
)(Badge);

const Header = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <S.Header>
      <S.Desktop>
        <S.LogoImage alt="corebiz logo" src={logo} />
        <S.SeachContainer>
          <S.SeachBar placeholder={"O que está procurando?"} />
          <S.SeachIconImage alt="search icon" src={searchIcon} />
        </S.SeachContainer>
        <S.MenuContainer>
          <S.UserIconImage alt="icone de usuario" src={userIcon} />
          <S.Account>Minha Conta</S.Account>
          <S.ButtonIcon>
            <StyledBadge badgeContent={4} color="secondary">
              <S.CartIconImage
                alt="icone de carrinho"
                src={cartIcon}
              ></S.CartIconImage>
            </StyledBadge>
          </S.ButtonIcon>
        </S.MenuContainer>
      </S.Desktop>
      <S.Mobile>
        <S.MenuContainer>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleOpen}
          >
            <img alt="menu Icon" src={menuIcon} />
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem>
              <S.UserIconImage alt="icone de usuario" src={userIcon} />
              <S.Account>Minha Conta</S.Account>
            </MenuItem>
          </Menu>
          <S.LogoImage alt="corebiz logo" src={logo} />
          <S.ButtonIcon>
            <StyledBadge badgeContent={4} color="secondary">
              <S.CartIconImage
                alt="icone de carrinho"
                src={cartIcon}
              ></S.CartIconImage>
            </StyledBadge>
          </S.ButtonIcon>
        </S.MenuContainer>
        <S.SeachContainer>
          <S.SeachBar placeholder={"O que está procurando?"} />
          <S.SeachIconImage alt="search icon" src={searchIcon} />
        </S.SeachContainer>
      </S.Mobile>
    </S.Header>
  );
};
export default Header;
