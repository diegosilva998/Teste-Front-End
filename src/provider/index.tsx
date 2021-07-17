import { ProductsCartProvider } from "provider/Cart";

const Provider = ({ children }) => {
  return <ProductsCartProvider>{children}</ProductsCartProvider>;
};
export default Provider;
