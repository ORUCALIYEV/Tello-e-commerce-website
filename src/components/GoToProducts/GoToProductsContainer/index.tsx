import React from "react";
import StyleGoToProductsContainer from "./style";
import Container from "../../UI/Container";
import GoToProduct from "../GoToProduct";
import phone from "../../../assets/images/products-phone.svg";
import watch from "../../../assets/images/products-watch.svg";
import accessoire from "../../../assets/images/products-accessoire.svg";

const GoToProductsContainer = () => {
  return (
    <StyleGoToProductsContainer>
      <Container>
        <GoToProduct
          grid={true}
          id="smartphone"
          title="Telefon"
          img={phone}
          padding={false}
        />
        <GoToProduct
          grid={false}
          id="smartwatch"
          title="Smart Saat"
          img={watch}
          padding={true}
        />
        <GoToProduct
          grid={false}
          title="Aksesuar"
          id="accessoires"
          img={accessoire}
          padding={true}
        />
      </Container>
    </StyleGoToProductsContainer>
  );
};

export default GoToProductsContainer;
