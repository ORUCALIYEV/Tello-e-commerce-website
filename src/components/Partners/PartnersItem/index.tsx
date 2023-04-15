import React from "react";
import StylePartnersItem from "./style";

const PartnersItem:React.FC<{img:string}> = ({ img }) => {
  return (
    <StylePartnersItem>
      <img src={img} alt="partner" />
    </StylePartnersItem>
  );
};

export default PartnersItem;
