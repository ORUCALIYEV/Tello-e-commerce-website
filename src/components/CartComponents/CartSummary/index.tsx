import React from "react";
import StyleCartSummary from "./style";
import azn from "../../../assets/images/icon-azn.svg";

const CartSummary: React.FC<{ price: number }> = ({ price }) => {
  return (
    <StyleCartSummary>
      <h3>Ümumi</h3>
      <div>
        <p>Məbləğ</p>
        <span>
          {price.toFixed(2)}
          <img src={azn} alt="azn" />
        </span>
      </div>
      <div>
        <p>Çatdırılma</p>
        <span>
          0.00
          <img src={azn} alt="azn" />
        </span>
      </div>
      <div>
        <p>Hədiyyə paketi</p>
        <span>
          0.00
          <img src={azn} alt="azn" />
        </span>
      </div>
      <div>
        <p>Promo kod</p>
        <span>
          0.00
          <img src={azn} alt="azn" />
        </span>
      </div>
      <div className="total">
        <p>Cəmi</p>
        <span>
          {price.toFixed(2)}
          <img src={azn} alt="azn" />
        </span>
      </div>
    </StyleCartSummary>
  );
};

export default CartSummary;
