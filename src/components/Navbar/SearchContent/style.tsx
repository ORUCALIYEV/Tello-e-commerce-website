import styled from "styled-components";

const StyleSearchContent = styled.div`
  position: absolute;
  background: var(--color-white);
  top: 100%;
  left: 0;
  right: 0;
  z-index: 5;
  padding: 1.6rem 1.6rem 2rem;
  border-top: 1px solid var(--color-green);

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.6rem;

    h2 {
      color: #2e3a59;
      font-weight: 500;
      font-size: 1.6rem;
      line-height: 2.4rem;
    }

    p {
      font-size: 1.2rem;
      line-height: 1.6rem;
      color: #8f9bb3;
      cursor: pointer;
    }
  }

  .history {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    color: #2e3a59;
    font-size: 1.4rem;
    line-height: 2rem;

    li {
      padding: 0.2rem 0.6rem;
      background: #edf1f7;
      border-radius: 4px;
      cursor: pointer;
    }
  }

  .suggestions {
    img {
      width: 64px;
      height: 64px;
      object-fit: cover;
      background: #f7f9fc;
      border: 1px solid #edf1f7;
      border-radius: 4px;
      grid-column: 1/2;
      grid-row: 1/3;
    }

    p {
      font-size: 1.4rem;
      line-height: 2rem;
      align-self: center;
    }

    span {
      font-weight: 500;
      font-size: 1.6rem;
      line-height: 2.4rem;
      display: flex;
      align-items: center;
      gap: 0.8rem;
    }

    li {
      display: grid;
      grid-template-columns: auto 1fr;
      grid-template-rows: auto auto;
      column-gap: 1.6rem;
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 1.6rem;
      padding-top: 0.4rem;
      padding-bottom: 4.5rem;
    }

    button {
      font-size: 1.4rem;
      line-height: 2rem;
      color: var(--color-white);
      background: var(--color-green);
      border: 0;
      padding: 1rem;
      cursor: pointer;
      transition: 0.3s;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
    }

    button:hover {
      opacity: 0.8;
    }
  }

  @media (min-width: 768px) {
    border-top: 0;
    border: 1px solid #f5f5f5;
    border-radius: 8px;
    top: 110%;
    padding: 2.4rem;
    overflow: hidden;

    .suggestions {
      max-height: 200px;
      overflow-y: auto;

      ul {
        gap: 2.4rem;
        padding-bottom: 1rem;
      }

      p {
        font-weight: 500;
      }
    }
  }
`;

export default StyleSearchContent;
