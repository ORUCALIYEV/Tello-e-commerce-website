import styled from "styled-components";

const StyleCartEmpty = styled.div`
  background: var(--color-white);
  border-radius: var(--border-radius);
  padding: 2.4rem;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-size: 1.6rem;
    line-height: 2.4rem;
    color: #bdbdbd;
    margin: 4rem 0 3.2rem;
  }

  a {
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 1.6rem;
    background: var(--color-green);
    border-radius: var(--border-radius);
    color: var(--color-white);
    padding: 1.6rem;
    width: 100%;
    display: flex;
    justify-content: center;
    transition: 0.3s;
  }

  a:hover {
    background: rgba(45, 208, 110, 0.9);
  }

  @media (min-width: 768px) {
    a {
      width: 280px;
    }
  }
`;

export default StyleCartEmpty;
