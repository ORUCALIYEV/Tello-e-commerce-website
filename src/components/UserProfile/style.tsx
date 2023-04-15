import styled from "styled-components";

const StyleUserProfile = styled.div`
  background-color: var(--color-white);
  border-radius: var(--border-radius);
  padding: 3.2rem 2.4rem;
  color: var(--color-dark-gray);

  h2 {
    margin-bottom: 3.2rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
    font-size: 1.6rem;
    line-height: 2.4rem;

    li {
      display: flex;
      align-items: center;
      gap: 1.6rem;
      cursor: pointer;

      div {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 24px;
      }
    }

    li:first-of-type {
      color: var(--color-green);
    }
  }
`;

export default StyleUserProfile;
