import { useEffect } from "react";
import { ReactNode } from "react";
import { createContext, useContext, useState } from "react";

type CartProviderProps = {
  children: ReactNode;
};
type CartProviderData = {
  cartQtd: number;
  addToCart: () => void;
};
const ProductsCartContext = createContext<CartProviderData>(
  {} as CartProviderData
);

export const ProductsCartProvider = ({ children }: CartProviderProps) => {
  const [cartQtd, setCartQtd] = useState(Number(localStorage.getItem("Cart")));

  const addToCart = () => {
    setCartQtd(cartQtd + 1);
  };

  useEffect(() => {
    localStorage.setItem("Cart", `${cartQtd}`);
  }, [cartQtd]);

  return (
    <ProductsCartContext.Provider value={{ cartQtd, addToCart }}>
      {children}
    </ProductsCartContext.Provider>
  );
};

export const useProductsCart = () => useContext(ProductsCartContext);
