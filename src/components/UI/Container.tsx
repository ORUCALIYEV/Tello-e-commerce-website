import styled from "styled-components";

const Container = styled.div`
  max-width: none;
  padding-left: 1.6rem;
  padding-right: 1.6rem;

  @media (min-width: 576px) {
    margin: 0 auto;
    max-width: 540px;
    padding-left: 0;
    padding-right: 0;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;

export default Container;
