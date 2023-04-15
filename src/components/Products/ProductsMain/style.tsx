import styled from "styled-components";

const StyleProductsMain = styled.main`
  .details {
    padding: 3.2rem 0 8.8rem;
    display: grid;
    align-items: start;
    row-gap: 2.4rem;

    & > div:first-of-type {
      display: none;
    }

    p {
      font-weight: 500;
      font-size: 1.6rem;
      line-height: 2.4rem;
    }
  }

  @media (min-width: 768px) {
    & > div:last-of-type {
      padding: 1.5rem 0 14rem;
      display: grid;
      grid-template-columns: 1fr 3fr;
      column-gap: 3.2rem;
    }

    .details {
      grid-template-columns: repeat(2, auto);
      row-gap: 3.2rem;
      padding: 0;

      & > div:first-of-type {
        justify-self: end;
        display: flex;
      }

      & > div:last-of-type {
        grid-column: 1/3;
      }
    }
  }
`;

export default StyleProductsMain;
