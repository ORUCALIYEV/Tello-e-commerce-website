import styled from "styled-components";

const StyleProductsPagination = styled.div`
  & > ul {
    display: flex;
    font-size: 2rem;
    line-height: 2.8rem;
    color: #2e3a59;
    gap: 2.2rem;
    justify-content: center;
    margin-top: 5.6rem;
    align-items: center;

    li {
      cursor: pointer;
    }

    .previous {
      margin-right: 3rem;
    }

    .next {
      margin-left: 3rem;
    }

    .selected {
      width: 32px;
      height: 40px;
      background: var(--color-green);
      border-radius: var(--border-radius);
      color: var(--color-white);
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  @media (min-width: 768px) {
    & > ul {
      gap: 4rem;
      color: #4f4f4f;
      margin-top: 7.6rem;

      .previous {
        margin-right: -0.8rem;
      }

      .next {
        margin-left: -0.8rem;
      }

      .previous,
      .next {
        width: 36px;
        height: 36px;
        border: 1px solid #e0e0e0;
        border-radius: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .selected {
        height: 32px;
      }
    }
  }
`;

export default StyleProductsPagination;
