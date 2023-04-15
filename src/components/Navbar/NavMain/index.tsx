import React, { useState } from "react";
import Logo from "../../UI/Logo";
import NavAccount from "../NavAccount";
import NavHamburger from "../NavHamburger";
import NavSearch from "../NavSearch";
import Container from "../../UI/Container";
import StyleNavMain from "./style";
import NavList from "../NavList";
import { Link } from "react-router-dom";

const NavMain = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <StyleNavMain open={navOpen}>
      <Container>
        <NavHamburger navOpen={navOpen} setNavOpen={setNavOpen} />
        <Link to={"/"}>
          <Logo />
        </Link>
        <NavSearch className="search" />
        <NavAccount />
        <NavList navOpen={navOpen} />
      </Container>
    </StyleNavMain>
  );
};

export default NavMain;
