import styled from "styled-components";

const StyleNavList = styled.ul`
  transition: all 0.3s;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  padding-top: 1.6rem;
  padding-bottom: 1.6rem;
  font-size: 2rem;
  line-height: 2.8rem;
  background: var(--color-white);
  border-top: 1px solid rgba(48, 48, 48, 0.16);
  height: calc(100vh - 131px);
  z-index: 5;

  .link-active {
    color: var(--color-green);
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 2.1rem;
  }

  a {
    transition: 0.3s;
  }

  &.nav-active {
    right: 0;
  }

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    right: 0;
    position: static;
    padding: 0;
    font-size: 1.4rem;
    line-height: 2rem;
    flex-direction: row;
    gap: 5.6rem;
    border-top: 0;
    height: auto;
    z-index: 1;

    & > div {
      flex-direction: row;
      gap: 3rem;
    }

    a:hover {
      color: var(--color-green);
    }

    li img {
      display: none;
    }
  }

  @media (min-width: 992px) {
    & > div {
      gap: 5.6rem;
    }
  }
`;

export default StyleNavList;
