import styled from "styled-components";

const StyleJoinImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.4rem;

  p {
    font-size: 1.4rem;
    line-height: 2rem;
    color: var(--color-dark-gray);
  }

  div {
    width: 449px;
    position: relative;
    display: none;

    img:first-of-type {
      position: absolute;
      top: 0;
      right: 0;
      z-index: -1;
    }
  }

  a {
    color: #2d9cdb;
  }

  @media (min-width: 1000px) {
    div {
      display: block;
    }
  }
`;

export default StyleJoinImage;
