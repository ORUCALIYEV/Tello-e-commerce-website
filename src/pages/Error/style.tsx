import styled from "styled-components";

const StyleError = styled.section`
  padding: 5rem 1.6rem;
  background: #faf9f9;

  & > div {
    padding: 0;
    background: var(--color-white);
    border-radius: var(--border-radius);
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 2rem;
    color: #ababab;

    span {
      font-size: 13rem;
      line-height: 13.2rem;
    }
  }

  @media (min-width: 768px) {
    padding: 5.1rem 0 6rem;
  }
`;

export default StyleError;
