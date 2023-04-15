import styled from "styled-components";
import img from "../../../assets/images/hero-background.svg";

const StyleHeroSlider = styled.section`
  padding: 3.2rem 0 4.8rem;
  background: url(${img});
  background-repeat: no-repeat;
  background-position: -100px 110px;
  position: relative;

  .swiper-pagination-bullet-active {
    background: var(--color-dark-green);
  }

  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.48);
    backdrop-filter: blur(70px);
  }

  .mySwiper {
    padding-bottom: 6rem;
  }

  @media (min-width: 768px) {
    padding: 6rem 0 9.6rem;
    background-position: 60px 100px;

    .overlay {
      backdrop-filter: blur(60px);
    }

    .mySwiper {
      padding-bottom: 8.5rem;
    }
  }
`;

export default StyleHeroSlider;
