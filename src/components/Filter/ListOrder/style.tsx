import styled from "styled-components";

const StyleListOrder = styled.div`
  font-size: 1.4rem;
  line-height: 2rem;
  color: #4f4f4f;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  padding: 1rem 1.6rem;
  position: relative;
  border: 1px solid #bdbdbd;
  border-radius: var(--border-radius);
  cursor: pointer;
  background-color: var(--color-white);
  position: relative;

  ul {
    position: absolute;
    background-color: var(--color-white);
    left: 0;
    right: 0;
    top: 110%;
    padding: 1.6rem;
    border: 1px solid #bdbdbd;
    border-radius: var(--border-radius);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    transition: 0.3s;
    transform: scale(0);
    transform-origin: top center;
    z-index: 5;

    &.active {
      transform: scale(1);
    }

    li {
      cursor: pointer;
    }
  }

  @media (min-width: 768px) {
    width: 176px;
  }
`;

export default StyleListOrder;
