import styled from "styled-components";

const StyleGoToProduct = styled.div<{ grid: boolean; padding: boolean }>`
  border-radius: 8px;
  font-weight: 300;
  font-size: 0.89rem;
  line-height: 1.3rem;
  padding: ${(props) =>
    props.padding ? "2.2rem 1.4rem 0 2.2rem" : "2.2rem 0 0 2.2rem"};
  background-color: #f2f2f2;
  background-image: linear-gradient(
    11deg,
    rgba(242, 242, 242, 0) 30%,
    rgba(238, 245, 146, 0.1) 60%,
    rgba(245, 146, 146, 0.4) 98%
  );
  display: grid;
  grid-template-columns: ${(props) => (props.grid ? "auto" : "4fr 5fr")};
  grid-template-rows: ${(props) => (props.grid ? "1fr 2fr" : "auto")};

  h2 {
    font-weight: 500;
    font-size: 1.33rem;
    line-height: 1.8rem;
  }

  img {
    width: 100%;
    align-self: end;
  }

  svg {
    width: 4px;
  }

  p {
    margin: 0.9rem 0 1.3rem;
  }

  a {
    color: #3366ff;
    margin-top: 0.9rem;
    display: flex;
    align-items: center;
    gap: 0.4rem;
    transition: 0.3s;
  }

  a:hover {
    gap: 0.7rem;
  }

  @media (min-width: 768px) {
    font-size: 1.6rem;
    line-height: 2.4rem;
    padding: ${(props) =>
      props.padding ? "4rem 2.5rem 0 4rem" : "4rem 0 0 4rem"};

    h2 {
      font-size: 2.4rem;
      line-height: 3.2rem;
    }

    a {
      gap: 1rem;
      margin-top: 1.6rem;
    }

    p {
      padding: 1.6rem 0 2.4rem;
    }

    a:hover {
      gap: 1.5rem;
    }

    svg {
      width: 7px;
    }
  }
`;

export default StyleGoToProduct;
