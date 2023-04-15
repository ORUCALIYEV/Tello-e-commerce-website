import React from "react";
import StyleCartEmpty from "./style";
import bag from "../../../assets/images/icon-shopping-bag.svg";
import { Link } from "react-router-dom";

const CartEmpty = () => {
  return (
    <StyleCartEmpty>
      <img src={bag} alt="shopping bag" />
      <p>Səbətiniz halhazırda boşdur</p>
      <Link to="/">Alış-verişə davam et</Link>
    </StyleCartEmpty>
  );
};

export default CartEmpty;
