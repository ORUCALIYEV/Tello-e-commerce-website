import styled from "styled-components";

const StyleCartSummary = styled.div`
  background: var(--color-white);
  border-radius: 16px;
  padding: 3.2rem 2.4rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  h3 {
    font-weight: 500;
    font-size: 2rem;
    line-height: 2.8rem;
    color: #1d2123;
  }

  & > div {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    font-size: 1.6rem;
    line-height: 2.4rem;

    span {
      display: flex;
      align-items: center;
      gap: 1.35rem;
    }

    img {
      filter: brightness(0) saturate(100%) invert(4%) sepia(3%) saturate(6935%)
        hue-rotate(157deg) brightness(81%) contrast(80%);
      width: 15px;
      height: 12.5px;
    }
  }

  .total {
    padding-top: 1.6rem;
    border-top: 1px solid #828282;

    span {
      color: var(--color-red);
    }

    img {
      filter: brightness(0) saturate(100%) invert(33%) sepia(63%)
        saturate(6686%) hue-rotate(326deg) brightness(92%) contrast(86%);
    }

    p {
      font-weight: 500;
      color: #1d2123;
    }
  }
`;

export default StyleCartSummary;
