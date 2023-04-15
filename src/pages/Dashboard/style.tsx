import styled from "styled-components";

const StyleDashboard = styled.section`
  padding: 4rem 0 8.9rem;
  background: #faf9f9;

  & > div {
    display: grid;
    row-gap: 3.2rem;
  }

  .selected-header {
    margin-bottom: 1.7rem;
  }

  h2 {
    font-weight: 500;
    font-size: 2rem;
    line-height: 2.8rem;
    color: var(--color-dark-gray);
  }

  @media (min-width: 768px) {
    padding: 5.1rem 0 17rem;

    & > div {
      display: grid;
      grid-template-columns: 1fr 3fr;
      column-gap: 3.2rem;
      align-items: start;
    }
  }
`;

export default StyleDashboard;
