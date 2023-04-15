import React from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

const StyleOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;

  @media (max-width: 767px) {
    z-index: -5;
    background: transparent;
  }
`;

const Overlay = () => {
  return createPortal(
    <StyleOverlay></StyleOverlay>,
    document.querySelector("#modal")!
  );
};

export default Overlay;
