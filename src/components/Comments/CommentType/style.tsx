import styled from "styled-components";

const StyleCommentType = styled.div`
  display: grid;
  row-gap: 2.4rem;
  padding: 4.1rem 0 2.4rem;
  border-bottom: 1px solid #bdbdbd;

  .score {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 2.8rem;
    font-weight: 300;
    font-size: 5.6rem;
    line-height: 7.1rem;
    color: #000000;
  }

  article {
    display: flex;
    align-items: center;
    flex-direction: column;
    color: var(--color-dark-gray);

    h3 {
      font-weight: 500;
      font-size: 2rem;
      line-height: 2.8rem;
      border-top: 1px solid #c4c4c4;
      padding-top: 2.4rem;
    }

    span {
      font-size: 1.2rem;
      line-height: 1.6rem;
      margin: 0.8rem 0 2.4rem;
      display: inline-block;
    }

    p {
      font-size: 1.6rem;
      line-height: 2.4rem;
    }
  }

  @media (min-width: 768px) {
    gap: 0;
    grid-template-columns: auto 1fr;
    padding: 3.2rem 0;

    article {
      align-items: flex-start;
      padding-left: 3.1rem;
      border-left: 1px solid #bdbdbd;

      h3 {
        border: 0;
        padding: 0.6rem 0 0;
      }

      span {
        margin: 0.8rem 0 1.6rem;
      }
    }

    .score {
      font-size: 7.2rem;
      line-height: 9.1rem;
      gap: 3.7rem;
      padding: 0 4.3rem;

      img {
        width: 192px;
      }
    }
  }
`;

export default StyleCommentType;
