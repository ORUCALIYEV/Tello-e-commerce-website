import styled from "styled-components";
import checked from "../../../assets/images/icon-checked.svg";

const StyleFilterOption = styled.li`
  font-size: 1.4rem;
  line-height: 2rem;
  display: flex;
  align-items: center;
  gap: 1.6rem;
  cursor: pointer;

  .checked {
    background-color: var(--color-green);
    background-image: url(${checked});
    background-repeat: no-repeat;
    background-position: center center;
  }

  div {
    width: 2rem;
    height: 2rem;
    background-color: rgba(0, 214, 143, 0.16);
    border: 1px solid var(--color-green);
    border-radius: 3px;
    cursor: pointer;
  }
`;

export default StyleFilterOption;
