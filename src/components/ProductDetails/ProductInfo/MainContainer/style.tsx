import styled from "styled-components";

const StyleMainContainer = styled.section`
  padding: 2.4rem 0;

  & > div {
    display: grid;
    row-gap: 5.177rem;
  }

  @media (min-width: 768px) {
    padding: 0.4rem 0 9.6rem;

    & > div {
      grid-template-columns: repeat(2, 1fr);
      row-gap: 0rem;
      column-gap: 3.2rem;

      & > div:last-of-type {
        padding-top: 3.2rem;
      }
    }
  }
`;

export default StyleMainContainer;
