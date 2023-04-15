import styled from "styled-components";

const StyleChangeToComments = styled.section`
  .buttons {
    display: grid;
    grid-template-columns: 1fr 1fr;
    border-top: 1px solid #f2f2f2;
    border-bottom: 1px solid #f2f2f2;

    button {
      background: transparent;
      border: 0;
      cursor: pointer;
      font-size: 1.4rem;
      padding: 1.6rem 0 1.2rem;
      line-height: 2rem;
      color: #a8a8a8;
    }

    .active {
      font-weight: 500;
      color: var(--color-green);
      border-bottom: 4px solid var(--color-green);
    }
  }

  @media (min-width: 768px) {
    .buttons {
      grid-template-columns: 2fr 2fr 3fr;

      button {
        color: #bdbdbd;
        font-size: 2rem;
        line-height: 2.8rem;
        padding: 1.6rem 2rem;
      }

      .active {
        color: var(--color-dark-gray);
        border: 0;
      }
    }
  }
`;

export default StyleChangeToComments;
