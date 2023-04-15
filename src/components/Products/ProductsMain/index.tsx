import React, { useEffect } from "react";
import StyleProductsMain from "./style";
import Container from "../../UI/Container";
import FilterContainer from "../../Filter/FilterContainer";
import ChangeProducts from "../../ChangeProducts";
import ListOrder from "../../Filter/ListOrder";
import ProductsPagination from "../ProductsPagination";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../../store";
import { changeDisplayedProducts } from "../../../slices/filterSlice";
import Loading from "../../UI/Loading";

const ProductsMain = () => {
  const filterData = useSelector((state: RootState) => state.filter);
  const products = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (products.products.data) {
      dispatch(changeDisplayedProducts(products.products.data));
    }
  }, [
    products,
    filterData.brandList,
    filterData.categoryList,
    filterData.priceList,
    dispatch,
  ]);

  return (
    <StyleProductsMain>
      <ChangeProducts />
      <Container>
        <FilterContainer />
        <div className="details">
          <p>{filterData.displayedProducts.length} məhsul tapıldı</p>
          <ListOrder />
          {products.loading && <Loading padding={true} height={false} />}
          {!products.loading && <ProductsPagination itemsPerPage={9} />}
        </div>
      </Container>
    </StyleProductsMain>
  );
};

export default ProductsMain;
