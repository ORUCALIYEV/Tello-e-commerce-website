import styled from "styled-components";

const StyleGoToProductsContainer = styled.section`
  margin-top: 4.8rem;

  & > div {
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    gap: 1.6rem;
  }

  & > div > div:first-of-type {
    grid-row: 1/3;
  }

  @media (min-width: 768px) {
    margin-top: calc(106px - 24px);

    & > div {
      grid-template-rows: repeat(2, 1fr);
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

export default StyleGoToProductsContainer;
