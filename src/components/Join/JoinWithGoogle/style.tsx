import styled from "styled-components";

const StyleJoinWithGoogle = styled.div`
  margin: 3.2rem 0 2.4rem;

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  button {
    background: transparent;
    display: flex;
    align-items: center;
    gap: 0.8rem;
    font-size: 1.2rem;
    line-height: 1.6rem;
    color: var(--color-dark-gray);
    border: 0;
    cursor: pointer;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      border-radius: 50%;
    }
  }

  button:first-of-type div {
    background: #4267b2;
  }

  button:last-of-type div {
    background: #db4437;
  }

  p {
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 1.8rem;
    text-align: center;
    color: #bdbdbd;
    margin-top: 2.4rem;
  }
`;

export default StyleJoinWithGoogle;
