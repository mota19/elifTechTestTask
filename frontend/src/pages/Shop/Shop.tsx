import type { FC } from "react";
import Navigation from "../../Components/Navigation";
import Shops from "./components/shops";

const Shop: FC = () => {
  return (
    <>
      <Navigation />
      <Shops />
    </>
  );
};

export default Shop;
