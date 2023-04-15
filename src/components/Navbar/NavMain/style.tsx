import styled from "styled-components";

const StyleNavMain = styled.section<{ open: boolean }>`
  padding: 0.8rem 0 1.6rem;
  position: relative;
  background: var(--color-white);
  border-bottom: 1px solid #2ce59b;
  overflow: ${(props) => (props.open ? "visible" : "hidden")};

  & > div {
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-template-rows: repeat(2, auto);
    row-gap: 1.2rem;
    column-gap: 3.09rem;
    align-items: center;
  }

  .search {
    grid-column: 1/4;
    grid-row: 2/3;
  }

  @media (min-width: 768px) {
    padding: 2rem 0 1.2rem;
    z-index: 2;
    overflow: visible;

    & > div {
      grid-template-columns: auto 1fr auto;
      grid-template-rows: auto auto;
      row-gap: 2.8rem;
      column-gap: 0rem;
    }

    .search {
      grid-column: 2/3;
      grid-row: 1/2;
      margin: 0 8rem 0 8.9rem;
    }

    ul {
      grid-column: 1/4;
      grid-row: 2/3;
    }
  }

  @media (min-width: 1000px) {
    .search {
      margin: 0 16rem 0 17.8rem;
    }
  }
`;

export default StyleNavMain;
