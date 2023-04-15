import styled from "styled-components";

const StyleProductSpecifications = styled.section`
  font-size: 1.6rem;
  line-height: 2.4rem;
  color: #828282;
  display: grid;
  row-gap: 4rem;
  padding: 2.4rem 0 8.8rem;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  }

  h2 {
    font-size: 2rem;
    line-height: 2.8rem;
    color: var(--color-dark-gray);
    font-weight: 500;
  }

  article {
    h2 {
      margin-bottom: 2.6rem;
    }

    p {
      margin-left: 1.6rem;
    }
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    row-gap: 0;
    padding: 3.2rem 0 14rem;

    article {
      grid-column: 2/3;
    }

    & > div {
      grid-column: 1/2;
      grid-row: 1/2;
    }

    & > div,
    article {
      padding: 0 5rem;
    }
  }

  @media (min-width: 992px) {
    & > div,
    article {
      padding: 0 10rem;
    }
  }
`;

export default StyleProductSpecifications;
