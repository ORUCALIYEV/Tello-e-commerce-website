import styled from "styled-components";

const StyleFeatureItem = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.64rem;
  line-height: 2.5rem;
  text-align: center;

  h2 {
    font-weight: 500;
    font-size: 2.05rem;
    line-height: 2.9rem;
    margin: 2.4rem 0 1.66rem;
  }

  @media (min-width: 768px) {
    h2 {
      margin: 4rem 0 2.4rem;
    }
  }
`;

export default StyleFeatureItem;
