import React from "react";
import SpecificationType from "../SpecificationType";
import StyleProductSpecifications from "./style";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store";

const ProductSpecifications = () => {
  const data = useSelector((state: RootState) => state.product);

  return (
    <StyleProductSpecifications>
      <article>
        <h2>Məhsul haqqında</h2>
        <p>{data.product.description.replace("<p>", "").replace("</p>", "")}</p>
      </article>
      <div>
        <SpecificationType title="Əsas göstəricilər" />
        <SpecificationType title="Əlavə göstəricilər" />
        <SpecificationType title="Üstünlüklər" />
      </div>
    </StyleProductSpecifications>
  );
};

export default ProductSpecifications;
