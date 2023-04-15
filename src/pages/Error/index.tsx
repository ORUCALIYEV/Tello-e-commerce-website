import React from "react";
import StyleError from "./style";
import Container from "../../components/UI/Container";

const Error = () => {
  return (
    <StyleError>
      <Container>
        <span>404</span>
        <p>Page is not found.</p>
      </Container>
    </StyleError>
  );
};

export default Error;
