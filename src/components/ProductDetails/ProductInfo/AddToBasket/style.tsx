import styled from "styled-components";

const StyleAddToBasket = styled.div`
  margin-top: 2.4rem;

  .count {
    display: flex;
    align-items: center;
    gap: 3.2rem;

    button {
      width: 32px;
      height: 32px;
      border: 0;
      cursor: pointer;
      background: #f2f2f2;
      border-radius: 20px;
      font-size: 1.6rem;
      color: var(--color-dark-gray);
    }

    p {
      font-size: 2rem;
      line-height: 2.4rem;
      color: #1d2123;
    }
  }

  & > button {
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 1.6rem;
    background: var(--color-green);
    display: flex;
    align-items: center;
    gap: 1.6rem;
    padding: 1.4rem 4.8rem;
    border: 0;
    cursor: pointer;
    border-radius: var(--border-radius);
    color: var(--color-white);
    margin-top: 3rem;
  }
`;

export default StyleAddToBasket;
