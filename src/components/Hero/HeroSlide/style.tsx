import styled from "styled-components";

const StyleHeroSlide = styled.div`
  & > div {
    display: grid;
    gap: 4rem;
  }

  h1 {
    font-weight: 600;
    font-size: 2.4rem;
    line-height: 3.2rem;
  }

  & > div > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.6rem;
    text-align: center;
  }

  p {
    font-size: 1.6rem;
    line-height: 2.4rem;
    color: #4f4f4f;
  }

  img {
    order: -1;
    width: 100%;
    padding: 0 4rem;
  }

  @media (min-width: 768px) {
    & > div {
      grid-template-columns: 2fr 1fr 2fr;
      align-items: center;
      gap: 0;
    }

    h1 {
      font-size: 4.8rem;
      line-height: 6.4rem;
    }

    img {
      order: 0;
      grid-column: 3/4;
      padding: 0;
    }

    & > div > div {
      align-items: flex-start;
      gap: 2.4rem;
      text-align: start;
    }
  }
`;

export default StyleHeroSlide;
