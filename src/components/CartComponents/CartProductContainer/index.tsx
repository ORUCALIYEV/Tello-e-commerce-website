import React from "react";
import CartProduct from "../CartProduct";
import CartSummary from "../CartSummary";
import StyleCartProductContainer from "./style";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

const CartProductContainer = () => {
  const data = useSelector((state: RootState) => state.cart);

  return (
    <StyleCartProductContainer>
      <div className="products">
        {data.products.map((el) => (
          <CartProduct key={el.id} info={el} />
        ))}
      </div>
      <CartSummary price={data.totalPrice} />
    </StyleCartProductContainer>
  );
};

export default CartProductContainer;
