import styled from "styled-components";

const StyleCommentForm = styled.section`
  h2 {
    font-weight: 500;
    font-size: 2rem;
    line-height: 2.8rem;
    text-align: center;
    margin-bottom: 3.2rem;
    margin-top: 2.4rem;
  }

  form {
    display: grid;
    row-gap: 2.4rem;

    & > div {
      color: var(--color-dark-gray);
      font-size: 1.4rem;
      line-height: 2rem;
      display: flex;
      flex-direction: column;
      gap: 0.8rem;

      select,
      textarea {
        background: #f2f2f2;
        border-radius: var(--border-radius);
        border: 0;
        outline: 0;
        font-family: inherit;
        padding: 1.4rem 1.6rem;
      }

      select {
        color: #828282;
      }
    }

    button {
      justify-self: end;
      font-weight: 500;
      font-size: 1.4rem;
      line-height: 1.6rem;
      color: var(--color-white);
      padding: 1.4rem 4.8rem;
      border: 0;
      border-radius: var(--border-radius);
      background: var(--color-green);
      cursor: pointer;
    }
  }

  @media (min-width: 768px) {
    h2 {
      margin: 4.8rem 0;
    }

    form {
      max-width: 800px;
      margin: 0 auto;
      gap: 3.2rem;
      grid-template-columns: 1fr 1fr;

      button,
      & > div:last-of-type,
      & > div:nth-of-type(3) {
        grid-column: 1/3;
      }
    }
  }
`;

export default StyleCommentForm;
