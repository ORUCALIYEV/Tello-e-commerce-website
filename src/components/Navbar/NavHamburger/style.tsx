import styled from "styled-components";

const StyleNavHamburger = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 0.44rem;

  div {
    width: 2rem;
    height: 0.16rem;
    background: #1d2123;
    border-radius: 5px;
    transition: 0.3s;
  }

  &.nav-active {
    transform: translateX(-20%) translateY(0.5px);
  }

  &.nav-active div:first-of-type {
    transform: rotate(45deg) translateX(42%);
  }

  &.nav-active div:nth-of-type(2) {
    transform: scale(0);
  }

  &.nav-active div:last-of-type {
    transform: rotate(-45deg) translateX(42%);
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export default StyleNavHamburger;
