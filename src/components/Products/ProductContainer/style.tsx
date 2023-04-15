import styled from "styled-components";

const StyleProductContainer = styled.section`
  & > div {
    display: grid;
    grid-template-rows: repeat(3, auto);
  }

  .products {
    display: flex;
    gap: 2.4rem;
    overflow-x: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    padding: 2.4rem 0.4rem;
  }

  .products::-webkit-scrollbar {
    display: none;
  }

  h2 {
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 2.4rem;
  }

  a {
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: center;
    gap: 0.8rem;
    grid-row: 3/4;
    justify-self: center;
  }

  @media (min-width: 768px) {
    & > div {
      display: grid;
      grid-template-rows: repeat(2, auto);
      grid-template-columns: 1fr auto;
    }

    a {
      grid-column: 2/3;
      grid-row: 1/2;
    }

    .products {
      grid-column: 1/3;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      column-gap: 2.4rem;
    }
  }
`;

export default StyleProductContainer;
