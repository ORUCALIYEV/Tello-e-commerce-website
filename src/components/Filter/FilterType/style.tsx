import styled from "styled-components";

interface Props {
  readonly open: boolean;
}

const StyleFilterType = styled.div<Props>`
  margin-bottom: 1.5rem;

  header {
    font-size: 1.4rem;
    line-height: 2rem;
    font-weight: 500;
    padding-bottom: 1rem;
    padding-left: 1.5rem;
    border-bottom: 1px solid #bdbdbd;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
  }

  .icon {
    cursor: pointer;

    div {
      background: #4f4f4f;
      width: 16px;
      height: 2px;
      border-radius: 7px;
    }

    div:first-of-type {
      transition: 0.3s;
      transform: ${(props) =>
        props.open
          ? "translateY(100%) rotate(0deg)"
          : "translateY(100%) rotate(90deg)"};
    }
  }

  ul {
    margin-left: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    padding: 3.2rem 0 1.7rem;
    transition: 0.3s;
  }
`;

export default StyleFilterType;
