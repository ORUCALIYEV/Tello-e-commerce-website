import styled from "styled-components";

const StylePagePath = styled.section`
  font-size: 1.4rem;
  line-height: 2rem;
  padding: 2.4rem 0;

  & > div {
    display: flex;
    align-items: center;
  }

  img {
    margin: 0 0.85rem 0 1.05rem;
  }

  @media (max-width: 767px) {
    display: none;
  }
`;

export default StylePagePath;
