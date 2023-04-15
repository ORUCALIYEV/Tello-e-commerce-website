import styled from "styled-components";

const StyleCartProductContainer = styled.div`
  display: grid;
  row-gap: 3.2rem;

  .products {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  }

  @media (min-width: 768px) {
    grid-template-columns: 3fr 1fr;
    gap: 0 3.2rem;
    align-items: start;

    .products {
      gap: 3.2rem;
    }
  }
`;

export default StyleCartProductContainer;
