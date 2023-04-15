import styled from "styled-components";

const StyleFeatureContainer = styled.section`
  padding: 7.2rem 0;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4.8rem;
  }

  @media (min-width: 768px) {
    padding: 13.6rem 0;

    & > div {
      flex-direction: row;
      align-items: center;
      gap: 2rem;
      justify-content: space-between;
    }
  }
`;

export default StyleFeatureContainer;
