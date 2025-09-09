import type { FC } from "react";
import { Link } from "react-router-dom";

const Navigation: FC = () => {
  return (
    <nav>
      <Link to="/">Shop</Link>
      <Link to="/ShoppingCart">Shopping Cart</Link>
    </nav>
  );
};

export default Navigation;
