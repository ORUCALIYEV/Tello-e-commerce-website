import styled from "styled-components";

const StyleFilterConainer = styled.div`
  background-color: var(--color-white);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: 0.3s;
  transform: translateX(-100%);
  z-index: 5;

  &.active {
    transform: translateX(0);
  }

  & > header {
    svg {
      cursor: pointer;
    }

    display: flex;
    align-items: center;
    gap: 2.2rem;
    font-weight: 500;
    font-size: 2rem;
    line-height: 2.8rem;
    padding: 1.6rem;
    border-bottom: 1px solid rgba(48, 48, 48, 0.16);
  }

  .filter {
    padding: 2.6rem 1.6rem;
  }

  @media (min-width: 768px) {
    position: static;
    transform: translateX(0);
    z-index: 0;

    & > header {
      display: none;
    }

    .filter {
      padding: 0;
    }
  }
`;

export default StyleFilterConainer;
