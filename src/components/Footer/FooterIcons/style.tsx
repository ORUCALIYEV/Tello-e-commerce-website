import styled from "styled-components";

const StyleFooterIcons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;

  .social-media {
    display: flex;
    align-items: center;
    gap: 3.2rem;
  }

  .social-media img:hover {
    filter: brightness(0) saturate(100%) invert(73%) sepia(24%) saturate(1414%)
      hue-rotate(86deg) brightness(93%) contrast(80%);
  }

  @media (min-width: 768px) {
    gap: 2.2rem;
  }
`;

export default StyleFooterIcons;
