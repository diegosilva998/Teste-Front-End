import styled from "styled-components";

export const NewsContainer = styled.section`
  background-color: #f2f2f2;
  width: 100%;
  height: 146px;
  max-width: 1920px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    height: 276px;
  }
`;
export const Message = styled.h2`
  font-family: Lato;
  font-weight: bold;
  font-size: 22px;
  text-align: center;
`;
export const ErrorMessage = styled.span`
  font-family: Lato;
  font-size: 12px;
  color: red;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  margin-right: 20px;
  height: 48px;
  width: 280px;
  border: none;
  border-radius: 8px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media (max-width: 768px) {
    height: 200px;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
`;

export const NewsButton = styled.button`
  height: 48px;
  width: 140px;
  border: none;
  border-radius: 8px;
  background-color: #000;
  color: #fff;
`;
export const NewEmailButton = styled.button`
  height: 48px;
  width: 328px;
  border: none;
  border-radius: 8px;
  background-color: #000;
  color: #fff;
`;
