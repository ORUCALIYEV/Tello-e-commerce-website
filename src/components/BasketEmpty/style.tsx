import styled from "styled-components";

const StyleBasketEmpty = styled.div`
  background: var(--color-white);
  border-radius: var(--border-radius);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 477px;
  font-size: 1.6rem;
  line-height: 2.4rem;
  gap: 4rem;
  color: #bdbdbd;

  @media (min-width: 768px) {
    height: 371px;
  }
`;

export default StyleBasketEmpty;
