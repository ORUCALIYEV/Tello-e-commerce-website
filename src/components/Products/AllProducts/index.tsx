import React from "react";
import ProductInfo from "../ProductInfo";
import StyleAllProducts from "./style";
import TypeProducts from "../../../models/products";
import { RootObject } from "../../../models/productInfo";

const AllProducts: React.FC<{ currentItems: TypeProducts.Datum[] | null }> = ({
  currentItems,
}) => {
  return (
    <StyleAllProducts>
      {currentItems &&
        currentItems.map((el: RootObject) => (
          <ProductInfo key={el.id} info={el} />
        ))}
    </StyleAllProducts>
  );
};

export default AllProducts;
