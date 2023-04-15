import React, { useEffect } from "react";
import CartEmpty from "../../components/CartComponents/CartEmpty";
import CartProductContainer from "../../components/CartComponents/CartProductContainer";
import Container from "../../components/UI/Container";
import StyleCart from "./style";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useLocation } from "react-router-dom";

const Cart = () => {
  const data = useSelector((state: RootState) => state.cart);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Tello | Cart";
  }, [location]);

  return (
    <StyleCart>
      <Container>
        <h2>{`Səbət (${data.totalQuantity} məhsul)`}</h2>
        {!data.totalQuantity && <CartEmpty />}
        {data.totalQuantity && <CartProductContainer />}
      </Container>
    </StyleCart>
  );
};

export default Cart;
