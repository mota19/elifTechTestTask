import type { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./navigation.module.css";

const Navigation: FC = () => {
  return (
    <nav className={styles.nav}>
      <Link to="/">Shop</Link>
      <Link to="/ShoppingCart">Shopping Cart</Link>
    </nav>
  );
};

export default Navigation;
