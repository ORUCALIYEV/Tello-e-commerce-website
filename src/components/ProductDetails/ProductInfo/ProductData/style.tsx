import styled from "styled-components";

const StyleProductData = styled.div`
  padding-bottom: 1.2rem;
  border-bottom: 1px solid #f2f2f2;

  .price {
    span {
      color: var(--color-discount);
      position: relative;
      font-size: 1.6rem;
      line-height: 2.4rem;
    }

    span::after {
      content: "";
      position: absolute;
      background: var(--color-discount);
      left: 0;
      right: -2px;
      height: 1px;
    }

    span svg {
      fill: var(--color-discount);
    }

    p,
    span {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    p svg {
      fill: var(--color-text);
    }

    p {
      color: var(--color-text);
      font-size: 2rem;
      line-height: 2.8rem;
    }

    &.discount {
      p {
        color: var(--color-red);
      }

      p svg {
        fill: var(--color-red);
      }
    }

    font-weight: 500;
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  .comment {
    display: flex;
    align-items: flex-start;
    margin: 1.6rem 0 2.4rem;

    img {
      width: 106px;
    }

    p {
      font-weight: 500;
      font-size: 1.4rem;
      line-height: 1.6rem;
      color: #2d9cdb;
    }

    span {
      font-size: 1.2rem;
      line-height: 1.6rem;
      color: var(--color-dark-gray);
      margin: 0 1.7rem 0 0.8rem;
    }
  }

  & > p {
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 2.4rem;
  }
`;

export default StyleProductData;
