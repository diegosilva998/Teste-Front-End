import styled from "styled-components";

export const Footer = styled.footer`
  width: 100%;
  height: 213px;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 768px) {
    height: 383px;
    flex-direction: column;
  }
`;

export const AddressContainer = styled.div`
  height: 213px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const ContactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 155px;
`;

export const ContactButton = styled.button`
  height: 38px;
  width: 100%;
  border-radius: 8px;
  border: none;
  background-color: #fff;
  color: #000;

  cursor: pointer;

  display: flex;
  justify-content: space-between;
  align-items: center;

  text-align: center;
  font-family: Nunito;
  font-weight: 600;
  font-size: 12px;
  margin-bottom: 20px;
`;

export const LogosContainer = styled.div``;
