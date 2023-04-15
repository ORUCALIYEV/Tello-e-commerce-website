import styled from "styled-components";

const StyleAllProducts = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(5, auto);
  gap: 2.4rem 1.6rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, auto);
    gap: 3.2rem 2.2rem;
  }
`;

export default StyleAllProducts;
