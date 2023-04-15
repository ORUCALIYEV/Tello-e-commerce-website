import React, { useState } from "react";
import ProductSpecifications from "../../ProductDetails/ProductSpecifications";
import Container from "../../UI/Container";
import CommentsContainer from "../CommentsContainer";
import StyleChangeToComments from "./style";

const ChangeToComments = () => {
  const [inComments, setInComments] = useState<boolean>(false);
  return (
    <StyleChangeToComments>
      <div className="buttons">
        <button
          onClick={() => setInComments(false)}
          className={!inComments ? "active" : ""}
        >
          Texniki xüsusiyyətləri
        </button>
        <button
          onClick={() => setInComments(true)}
          className={inComments ? "active" : ""}
        >
          Rəylər
        </button>
      </div>
      <Container>
        {inComments && <CommentsContainer />}
        {!inComments && <ProductSpecifications />}
      </Container>
    </StyleChangeToComments>
  );
};

export default ChangeToComments;
