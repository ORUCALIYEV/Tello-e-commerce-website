import styled from "styled-components";

const StyleNavSubList = styled.ul`
  position: absolute;
  background: var(--color-white);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  font-size: 2rem;
  line-height: 2.8rem;
  transition: 0.3s;
  transform: translateX(-100%);
  color: #4f4f4f;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 2.1rem;
    padding-top: 1.6rem;
    padding-bottom: 1.6rem;
  }

  p {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    font-weight: 500;
  }

  &.sub-active {
    transform: translateX(0);
  }

  @media (min-width: 768px) {
    transform: translateX(0);
    font-size: 1.4rem;
    line-height: 2rem;
    bottom: auto;
    top: 100%;
    padding: 3rem 0;
    display: none;
    border-top: 1px solid var(--color-green);

    & > div {
      flex-direction: row;
      gap: 5.6rem;
      padding: 0;
      width: 100%;
    }

    p {
      font-size: 1.6rem;
      line-height: 2.4rem;
      display: none;
    }

    li {
      opacity: 0.8;
    }

    &.sub-active {
      display: flex;
    }
  }
`;

export default StyleNavSubList;
