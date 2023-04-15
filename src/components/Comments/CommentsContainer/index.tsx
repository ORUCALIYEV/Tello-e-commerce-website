import React from "react";
import CommentForm from "../CommentForm";
import CommentType from "../CommentType";
import StyleCommentsContainer from "./style";

const CommentsContainer = () => {
  return (
    <StyleCommentsContainer>
      <CommentType />
      <CommentType />
      <CommentForm />
    </StyleCommentsContainer>
  );
};

export default CommentsContainer;
