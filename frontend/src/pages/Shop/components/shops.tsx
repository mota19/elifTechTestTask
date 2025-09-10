import type { FC } from "react";
import CardShop from "./cardShop";
import styles from "./shops.module.css";
import { useEffect } from "react";

const Shops: FC = () => {
  useEffect(() => {
    fetch("https://eliftechtesttask-production.up.railway.app/shops")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className={styles.shopBlock}>
      <CardShop name={"tesx"} />
    </div>
  );
};

export default Shops;
