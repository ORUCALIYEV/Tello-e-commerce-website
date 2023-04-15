import styled from "styled-components";

const StyleNavSearch = styled.div`
  background: #f2f2f2;
  border: 1px solid #e0e0e0;
  border-radius: var(--border-radius);

  padding: 1.2rem 1.6rem;
  display: flex;
  align-items: center;
  gap: 2.4rem;

  input {
    background: transparent;
    border: 0;
    outline: 0;
    font-size: 14px;
    line-height: 20px;
    color: #828282;
    flex-grow: 1;
  }

  @media (min-width: 768px) {
    position: relative;
  }
`;

export default StyleNavSearch;
