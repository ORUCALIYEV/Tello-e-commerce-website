import styled from "styled-components";

const StyleCart = styled.section`
  background: #faf9f9;
  padding: 4rem 1.6rem 8.8rem;

  & > div {
    padding: 0;
  }

  h2 {
    font-weight: 500;
    font-size: 2rem;
    line-height: 2.8rem;
    color: #4f4f4f;
    margin-bottom: 2.4rem;
  }

  @media (min-width: 768px) {
    padding: 4rem 0rem 17rem;

    h2 {
      margin-bottom: 4.8rem;
    }
  }
`;

export default StyleCart;
