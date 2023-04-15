import styled from "styled-components";

const StyleProductInfo = styled.div<{ discount: boolean }>`
  cursor: pointer;
  font-size: 1.4rem;
  line-height: 2rem;
  box-shadow: 0px 4px 8px rgba(164, 164, 164, 0.16);
  border-radius: 4px;
  background-color: var(--color-white);
  padding: 2.2rem 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  transition: 0.3s;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 101px;
    height: 142px;
    object-fit: cover;
    align-self: center;
  }

  span {
    color: var(--color-discount);
    position: relative;
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
    gap: 0.9rem;
  }

  p svg {
    fill: ${(props) =>
      props.discount ? "var(--color-red)" : "var(--color-text)"};
  }

  p {
    font-size: 1.6rem;
    line-height: 2.4rem;
    color: ${(props) =>
      props.discount ? "var(--color-red)" : "var(--color-text)"};
  }

  div {
    font-weight: 500;
    display: flex;
    gap: 1.2rem;
    align-items: center;
  }

  @media (min-width: 768px) {
    padding: 2.4rem;

    img {
      width: 100%;
      height: 210px;
      align-self: center;
    }

    h3 {
      font-weight: 500;
    }
  }

  @media (min-width: 1200px) {
    img {
      padding: 1rem;
    }
  }
`;

export default StyleProductInfo;
