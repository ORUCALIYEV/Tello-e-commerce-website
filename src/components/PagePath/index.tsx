import React from "react";
import StylePagePath from "./style";
import arrow from "../../assets/images/icon-chevron-right-path.svg";
import Container from "../UI/Container";
import { Link } from "react-router-dom";

const PagePath: React.FC<{ path: string; products: boolean }> = ({
  path,
  products,
}) => {
  return (
    <StylePagePath>
      <Container>
        <Link to="/">Ana səhifə</Link>
        {products && (
          <>
            <img src={arrow} alt="arrow" />
            <Link to="/products">Məhsullar</Link>
          </>
        )}
        <img src={arrow} alt="arrow" />
        <p>{path}</p>
      </Container>
    </StylePagePath>
  );
};

export default PagePath;
