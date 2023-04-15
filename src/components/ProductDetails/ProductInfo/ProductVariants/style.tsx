import styled from "styled-components";

const StyleProductVariants = styled.div`
  padding: 2.4rem 0;
  border-bottom: 1px solid #f2f2f2;
  color: var(--color-dark-gary);
  font-size: 1.4rem;
  line-height: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  .color,
  .storage {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    flex-wrap: wrap;

    div {
      cursor: pointer;
    }
  }

  .variant-active {
    border: 2px solid var(--color-green);
  }

  .color div {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }

  .storage div {
    padding: 0.8rem 1.6rem;
    background: #f2f2f2;
    border-radius: var(--border-radius);
  }

  .storage div:nth-child(even) {
    background: var(--color-dark-gray);
    color: var(--color-white);
  }
`;

export default StyleProductVariants;
