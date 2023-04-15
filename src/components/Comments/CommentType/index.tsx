import React from "react";
import StyleCommentType from "./style";
import stars from "../../../assets/images/comment-review.svg";

const CommentType = () => {
  return (
    <StyleCommentType>
      <div className="score">
        <p>4</p>

        <img src={stars} alt="review" />
      </div>
      <article>
        <h3>Gunel Mammadova</h3>
        <span>Yaddaş - 64, Rəng - Qara</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattis
          viverra lacus ut et, etiam. Vel ut in nunc nunc ut sit nibh tortor
          sit. Consectetur sit auctor odio quis suspendisse tincidunt quis. Et
          tristique amet aenean nibh porttitor quis aliquam integer. Consectetur
          lacus, volutpat malesuada libero. Sollicitudin libero pharetra a.
        </p>
      </article>
    </StyleCommentType>
  );
};

export default CommentType;
