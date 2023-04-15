import styled from "styled-components";

const StyleFooterLinks = styled.div`
  color: var(--color-white);

  h2 {
    font-weight: 500;
    font-size: 2rem;
    margin-bottom: 3rem;
    text-align: center;
  }

  @media (min-width: 768px) {
    h2 {
      text-align: left;
    }
  }
`;

export default StyleFooterLinks;
