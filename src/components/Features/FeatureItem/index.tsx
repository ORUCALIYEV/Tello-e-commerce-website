import React from "react";
import StyleFeatureItem from "./style";

const FeatureItem:React.FC<{img:string;title:string}> = ({ img, title }) => {
  return (
    <StyleFeatureItem>
      <img src={img} alt="icon" />
      <h2>{title}</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
    </StyleFeatureItem>
  );
};

export default FeatureItem;
