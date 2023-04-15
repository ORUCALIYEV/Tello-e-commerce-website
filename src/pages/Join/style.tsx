import styled from "styled-components";

const StyleJoin = styled.section`
  padding: 7.2rem 0 8.8rem;

  & > div {
    display: grid;
    row-gap: 2.4rem;
  }

  h1 {
    font-weight: 500;
    font-size: 2rem;
    line-height: 2.8rem;
    color: var(--color-dark-gray);
    text-align: center;
  }

  form {
    & > p {
      font-weight: 500;
      font-size: 1.4rem;
      line-height: 1.6rem;
      margin: 0.8rem 0 4.8rem;
      text-align: right;
      color: #2d9cdb;
      cursor: pointer;
    }

    & > button {
      cursor: pointer;
      background: var(--color-green);
      border-radius: var(--border-radius);
      font-weight: 500;
      font-size: 1.4rem;
      line-height: 1.6rem;
      color: var(--color-white);
      border: 0;
      width: 100%;
      padding: 1.6rem;
    }
  }

  .form-group:not(:last-of-type) {
    margin-bottom: 2.4rem;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    font-size: 1.4rem;
    line-height: 2rem;

    label {
      color: var(--color-dark-gray);
    }

    input {
      background: #f2f2f2;
      border-radius: var(--border-radius);
      outline: 0;
      border: 0;
      padding: 1.4rem 1.6rem;
      font-family: inherit;

      &::placeholder {
        color: #828282;
      }
    }

    .form-password {
      background: #f2f2f2;
      border-radius: var(--border-radius);
      display: grid;
      grid-template-columns: 1fr auto;

      img {
        align-self: center;
        padding-right: 1.2rem;
        cursor: pointer;
      }
    }

    p {
      color: var(--color-red);
      font-size: 1.4rem;
      line-height: 1.6rem;
    }
  }

  .form-terms {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    margin-bottom: 4.4rem;

    input {
      border: 1px solid #e0e0e0;
      border-radius: var(--border-radius);
      width: 22px;
      height: 22px;
    }

    p {
      color: var(--color-red);
      font-size: 1.4rem;
      line-height: 1.6rem;
    }

    label {
      font-size: 1.2rem;
      line-height: 1.6rem;
    }

    span {
      color: #2d9cdb;
    }
  }

  .form-phone {
    display: grid;
    grid-template-columns: auto 1fr;
    background: #f2f2f2;
    border-radius: var(--border-radius);

    select {
      padding: 0 1rem 0 1.5rem;
      border: 0;
      outline: 0;
    }

    select {
      background: transparent;
    }
  }

  @media (min-width: 768px) {
    padding: 9.6rem 0 17.8rem;
  }

  @media (min-width: 1000px) {
    & > div {
      grid-template-columns: 1fr 1fr;
      row-gap: 0;

      & > * {
        justify-self: center;
      }

      & > section {
        width: 312px;
      }
    }
  }
`;

export default StyleJoin;
