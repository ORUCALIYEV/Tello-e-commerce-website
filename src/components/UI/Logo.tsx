import React from "react";
import styled from "styled-components";
import logo from "../../assets/images/logo.svg";

const StyleLogo = styled.div`
  font-weight: 500;
  font-size: 3.4rem;
  line-height: 4rem;
  color: var(--color-green);
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

const Logo = () => {
  return (
    <StyleLogo>
      <img src={logo} alt="icon" />
      <p>Tello</p>
    </StyleLogo>
  );
};

export default Logo;
