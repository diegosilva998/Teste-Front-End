import * as S from "./style";
import LogosFooter from "assets/logosFooter.svg";
import phoneIcon from "assets/phoneIcon.svg";
import msgIcon from "assets/msgIcon.svg";

const Baseboard = () => {
  return (
    <S.Footer>
      <S.AddressContainer style={{ color: "white" }}>
        <h2>Localização</h2>
        <div>Avenida Andrômeda, 2000. Bloco 6 e 8 </div>
        <div>Alphavile SP</div>
        <div>brasil@corebiz.ag</div>
        <div>+55 11 3090 1039</div>
      </S.AddressContainer>
      <S.ContactsContainer>
        <S.ContactButton>
          <img alt="" src={msgIcon} /> <div>ENTRE EM CONTATO</div>
        </S.ContactButton>
        <S.ContactButton>
          <img alt="" src={phoneIcon} />
          <div>
            FALE COM O NOSSO
            <br /> CONSULTOR ONLINE
          </div>
        </S.ContactButton>
      </S.ContactsContainer>
      <S.LogosContainer>
        <img src={LogosFooter} alt="logos footer" />
      </S.LogosContainer>
    </S.Footer>
  );
};

export default Baseboard;
