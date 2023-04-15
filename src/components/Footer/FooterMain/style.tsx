import styled from "styled-components";

const StyleFooterMain = styled.footer`
  background: var(--color-footer);
  padding: 4.6rem 0 2.4rem;

  .lists {
    display: grid;
    grid-template-rows: repeat(4, auto);
    justify-items: center;
    row-gap: 4rem;
    padding-bottom: 2rem;
  }

  .lists > div:first-of-type {
    margin-bottom: 1rem;
  }

  @media (min-width: 768px) {
    .lists {
      grid-template-rows: repeat(2, auto);
      grid-template-columns: repeat(3, 1fr);
      justify-items: start;
      padding-bottom: 9rem;
    }

    .lists > div:first-of-type {
      grid-column: 1/4;
      margin-bottom: 0;
    }
  }

  @media (min-width: 992px) {
    .lists {
      grid-template-rows: auto;
      grid-template-columns: repeat(4, 1fr);
      row-gap: 0;
    }

    .lists > div:first-of-type {
      grid-column: 1/2;
    }
  }
`;

export default StyleFooterMain;
