import React from "react";
import StyleHeroSlide from "./style";
import hero from "../../../assets/images/hero-image.svg";
import Container from "../../UI/Container";

const HeroSlide = () => {
  return (
    <StyleHeroSlide>
      <Container>
        <div>
          <h1>Buy & Sell What's Now & Next</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis
            malesuada et leo faucibus{" "}
          </p>
        </div>
        <img src={hero} alt="hero" />
      </Container>
    </StyleHeroSlide>
  );
};

export default HeroSlide;
