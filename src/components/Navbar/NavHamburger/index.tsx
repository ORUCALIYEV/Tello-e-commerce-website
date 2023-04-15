import React from "react";
import StyleNavHamburger from "./style";

const NavHamburger: React.FC<{
  navOpen: boolean;
  setNavOpen: (arg: boolean) => void;
}> = ({ navOpen, setNavOpen }) => {
  return (
    <StyleNavHamburger
      onClick={() => {
        setNavOpen(!navOpen);
      }}
      className={navOpen ? "nav-active" : ""}
    >
      <div></div>
      <div></div>
      <div></div>
    </StyleNavHamburger>
  );
};

export default NavHamburger;
