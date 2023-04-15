import styled from "styled-components";

const StyleAds = styled.section`
  margin: 4.8rem 0;

  & > div {
    display: grid;
    gap: 2.4rem;
  }

  img {
    width: 100%;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    margin: 4rem 0 7.2rem;

    & > div {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

export default StyleAds;
