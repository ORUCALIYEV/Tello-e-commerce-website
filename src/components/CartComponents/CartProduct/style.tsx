import styled from "styled-components";

const StyleCartProduct = styled.div`
  background: var(--color-white);
  border-radius: var(--border-radius);
  padding: 2.4rem;
  display: flex;
  align-items: start;

  & > img {
    cursor: pointer;
  }

  .details {
    flex-grow: 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 1.2rem;

    & > p {
      font-weight: 500;
      font-size: 1.4rem;
      line-height: 2rem;
      text-align: center;
      grid-column: 1/3;
      padding-top: 0.4rem;
      cursor: pointer;
    }

    & > img {
      width: 113px;
      height: 163px;
      object-fit: cover;
      justify-self: center;
      grid-column: 1/3;
    }
  }

  input {
    width: 24px;
    height: 24px;
  }

  .quantity {
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 2rem;
    color: #1d2123;
    display: flex;
    align-items: center;
    gap: 3.5rem;
    justify-self: end;

    button {
      font-size: 2.2rem;
      background: transparent;
      border: 0;
      cursor: pointer;
    }
  }

  .variant {
    font-size: 1.2rem;
    line-height: 1.6rem;
    display: flex;
    gap: 1.2rem;
    grid-column: 1/3;

    span {
      color: #828282;
    }
  }

  .price {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 2rem;

    img {
      width: 14px;
      filter: brightness(0) saturate(100%) invert(12%) sepia(3%) saturate(12%)
        hue-rotate(1deg) brightness(99%) contrast(79%);
    }
  }

  @media (min-width: 768px) {
    padding: 1.2rem 1.5rem;
    align-items: center;
    gap: 2.4rem;

    .details {
      grid-template-columns: auto 1fr 1fr 1fr;
      grid-row: auto auto;
      align-items: center;
      column-gap: 3.2rem;

      & > img {
        width: 50px;
        height: 72px;
        grid-row: 1/3;
        grid-column: 1/2;
      }

      & > p {
        grid-column: 2/4;
        text-align: start;
      }
    }

    .variant {
      grid-row: 2/3;
      grid-column: 2/3;
    }

    .price {
      grid-column: 3/4;
      grid-row: 2/3;
    }

    .quantity {
      grid-row: 1/3;
      grid-column: 4/5;
      justify-self: start;
    }
  }
`;

export default StyleCartProduct;
