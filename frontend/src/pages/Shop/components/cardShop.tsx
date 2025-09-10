import type { FC } from "react";
import type { ICardShop } from "../types";

const CardShop: FC<ICardShop> = ({ name }) => {
  return <div>{name}</div>;
};

export default CardShop;
