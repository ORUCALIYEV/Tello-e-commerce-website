import React from "react";
import StyleAds from "./style";
import adIphone from "../../assets/images/ad-iphone.svg";
import adAirtag from "../../assets/images/ad-airtag.svg";
import Container from "../UI/Container";

const Ads = () => {
  return (
    <StyleAds>
      <Container>
        <img src={adIphone} alt="ad" />
        <img src={adAirtag} alt="ad" />
      </Container>
    </StyleAds>
  );
};

export default Ads;
