import styled from "styled-components";

const StyleNavAccount = styled.div`
  display: flex;
  align-items: center;
  gap: 1.1rem;

  svg {
    cursor: pointer;
    fill: #231f20;
  }

  .basket {
    position: relative;
    cursor: pointer;
  }

  p {
    position: absolute;
    width: 18px;
    height: 18px;
    background: var(--color-green);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    line-height: 10px;
    color: var(--color-white);
    top: -9px;
    right: -8px;
  }

  @media (min-width: 768px) {
    gap: 2.7rem;

    svg {
      fill: #4f4f4f;
    }

    p {
      position: static;
    }

    .basket {
      display: flex;
      align-items: center;
      gap: 0.7rem;
    }
  }
`;

export default StyleNavAccount;
