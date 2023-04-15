import styled from "styled-components";

// TODO: fix border top

const StyleFooterCredits = styled.div`
  color: var(--color-white);
  font-size: 1.6rem;
  line-height: 2rem;
  opacity: 0.8;
  display: flex;
  flex-direction: column-reverse;
  padding-top: 2rem;

  div {
    display: flex;
    justify-content: space-between;
    font-size: 1.4rem;
    margin-bottom: 2.4rem;
  }

  span {
    transition: 0.3s;
    cursor: pointer;
  }

  span:hover {
    color: var(--color-green);
  }

  p {
    padding-top: 2.4rem;
    border-top: 1px solid rgba(256, 256, 256, 0.1);
  }

  @media (min-width: 768px) {
    p {
      padding-top: 0;
      border: 0;
    }

    div {
      display: flex;
      gap: 4rem;
      margin-bottom: 0;
    }

    padding-top: 2.4rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid rgba(256, 256, 256, 0.1);
  }
`;

export default StyleFooterCredits;
