import * as S from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { API } from "services";
import { useState } from "react";

type userProps = {
  name: string;
  email: string;
};

const NewsLetter = () => {
  const [news, setNews] = useState(true);

  const schema = yup.object().shape({
    name: yup.string().required("Preencha com seu nome completo"),
    email: yup
      .string()
      .email("Email invalido")
      .required("Preencha com um e-mail valido"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data: userProps) => {
    try {
      // eslint-disable-next-line
      const response = await API.post("/newsletter", data);
      setNews(false);
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  const newEmail = () => {
    setNews(true);
  };

  return (
    <S.NewsContainer>
      {news ? (
        <S.NewsContainer>
          <S.Message>
            Participe de nossas news com promoções e novidades !
          </S.Message>
          <S.Form onSubmit={handleSubmit(onSubmit)}>
            <S.InputContainer>
              <S.Input
                type="text"
                {...register("name")}
                placeholder="Digite Seu Nome"
              />
              <S.ErrorMessage>{errors.name?.message}</S.ErrorMessage>
            </S.InputContainer>
            <S.InputContainer>
              <S.Input
                type="email"
                {...register("email")}
                placeholder="Digite Seu Email"
              />
              <S.ErrorMessage>{errors.email?.message}</S.ErrorMessage>
            </S.InputContainer>
            <S.NewsButton type="submit">Eu quero!</S.NewsButton>
          </S.Form>
        </S.NewsContainer>
      ) : (
        <S.NewsContainer>
          <S.Message>
            Seu e-mail foi cadastrado com sucesso! <br />
            partir de agora você receberá as novidade e ofertas exclusivas.
          </S.Message>
          <S.NewEmailButton onClick={newEmail}>
            Cadastrar novo Email
          </S.NewEmailButton>
        </S.NewsContainer>
      )}
    </S.NewsContainer>
  );
};

export default NewsLetter;

{
  /* </S.NewsContainer>
      <S.Message>
        Participe de nossas news com promoções e novidades !
      </S.Message>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register("name")}
          placeholder="Digite Seu Nome"
        />
        <span>{errors.name?.message}</span>
        <input
          type="email"
          {...register("email")}
          placeholder="Digite Seu Email"
        />
        <span>{errors.email?.message}</span>
        <span></span>
        <button type="submit">Eu quero</button>
      </form>
    </S.NewsContainer> */
}
