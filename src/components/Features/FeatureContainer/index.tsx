import React from "react";
import FeatureItem from "../FeatureItem";
import StyleFeatureContainer from "./style";
import Container from "../../UI/Container";
import guarantee from "../../../assets/images/icon-guarantee.svg";
import shipping from "../../../assets/images/icon-shipping.svg";
import credit from "../../../assets/images/icon-credit.svg";

const FeatureContainer = () => {
  return (
    <StyleFeatureContainer>
      <Container>
        <FeatureItem img={shipping} title="Çatdırılma" />
        <FeatureItem img={credit} title="Kredit" />
        <FeatureItem img={guarantee} title="Zəmanət" />
      </Container>
    </StyleFeatureContainer>
  );
};

export default FeatureContainer;
