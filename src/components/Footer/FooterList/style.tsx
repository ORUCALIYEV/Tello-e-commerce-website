import styled from "styled-components";

const StyleFooterList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  font-size: 1.6rem;
  align-items: center;
  line-height: 2.4rem;
  opacity: 0.8;

  a {
    transition: 0.3s;
  }

  a:hover {
    color: var(--color-green);
  }

  @media (min-width: 768px) {
    gap: 1.6rem;
    align-items: flex-start;
  }
`;

export default StyleFooterList;
