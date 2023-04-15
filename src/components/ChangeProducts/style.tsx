import styled from "styled-components";

const StyleChangeProducts = styled.div`
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border-bottom: 1px solid #edf1f7;

  button {
    background: transparent;
    border: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1.4rem;
    line-height: 1.6rem;
    font-weight: 500;
    padding: 0.4rem 0;
    width: 100%;
    justify-content: center;
  }

  button:first-of-type {
    border-right: 1px solid #edf1f7;

    position: relative;

    & > div {
      position: absolute;
      top: 190%;
      z-index: 5;
    }
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export default StyleChangeProducts;
