import React from "react";
import StyleBasketEmpty from "./style";
import basket from "../../assets/images/icon-shopping-bag.svg";

const BasketEmpty = () => {
  return (
    <StyleBasketEmpty>
      <img alt="shopping bag" src={basket} />
      <p>Səbətinizdə hazırda heç bir sifarişiniz yoxdur</p>
    </StyleBasketEmpty>
  );
};

export default BasketEmpty;
