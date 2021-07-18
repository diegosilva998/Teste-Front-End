import * as S from "./style";
import { API } from "services";
import { useState } from "react";
import { useEffect } from "react";
import Slider from "react-slick";
import { withStyles } from "@material-ui/core/styles";

import Rating from "@material-ui/lab/Rating";

import { useProductsCart } from "provider/Cart";

type productProps = {
  productId: number;
  productName: string;
  stars: number;
  imageUrl: string;
  listPrice?: number;
  price: number;
  installments: [];
};
type installmentsProps = {
  quantity: number;
  value: number;
};

const MultipleItems = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useProductsCart();

  const StyledRating = withStyles({
    iconFilled: {
      color: "#F8475F",
    },
  })(Rating);

  const get_products = async () => {
    try {
      const response = await API.get("/products");
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    get_products();
  }, []);

  const numberToReal = (price) => {
    let string = price.toString();
    let arr = string.split("");
    let num = arr.length - 2;
    arr.splice(num, 0, ",");
    return arr;
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          infinite: false,
          dots: false,
        },
      },
    ],
  };

  return (
    <S.Main>
      <S.SliderContainer>
        <h2> Mais Vendidos</h2>
        <Slider {...settings}>
          {products.map((product: productProps, index) => {
            return (
              <S.Product key={index}>
                <S.ProductsContainer>
                  <S.ProductImage src={product.imageUrl} />
                  <S.HoverContainer>
                    <S.ProductName>{product.productName}</S.ProductName>
                    <StyledRating
                      name="read-only"
                      value={product.stars}
                      readOnly
                      size="small"
                    />
                    {/* <Rating
                      name="read-only"
                      value={product.stars}
                      readOnly
                      size="small"
                    /> */}
                    {product.listPrice ? (
                      <S.ProductListPrice>
                        de {numberToReal(product.listPrice)}
                      </S.ProductListPrice>
                    ) : (
                      <S.ProductListPrice />
                    )}
                    <S.ProductPrice>
                      por R$ {numberToReal(product.price)}
                    </S.ProductPrice>
                    {product.installments.length > 0 ? (
                      product.installments.map(
                        (elem: installmentsProps, key) => {
                          return (
                            <S.ProductInstallments key={key}>
                              ou em {elem.quantity}x de R$ {elem.value}
                            </S.ProductInstallments>
                          );
                        }
                      )
                    ) : (
                      <S.ProductInstallments></S.ProductInstallments>
                    )}
                    <S.ButtonBuy onClick={addToCart}>COMPAR</S.ButtonBuy>
                  </S.HoverContainer>
                </S.ProductsContainer>
              </S.Product>
            );
          })}
        </Slider>
      </S.SliderContainer>
    </S.Main>
  );
};

export default MultipleItems;
