import React from "react";
import ProductInfo from "../ProductInfo";
import StyleProductContainer from "./style";
import Container from "../../UI/Container";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../../store";
import { getByCategory } from "../../../helpers/getByCategory";
import { changeBrandList, clearFilter } from "../../../slices/filterSlice";
import { Link } from "react-router-dom";
import Loading from "../../UI/Loading";

const ProductContainer: React.FC<{
  className: string;
  title: string;
  categories: string[];
}> = (props) => {
  const data = useSelector((state: RootState) => state.products);

  const dispatch = useDispatch<AppDispatch>();
  const navigateToProducts = function () {
    dispatch(clearFilter);
    for (const el of props.categories) {
      dispatch(changeBrandList(el));
    }
  };

  return (
    <StyleProductContainer className={props.className}>
      <Container>
        <h2>{props.title}</h2>
        <Link onClick={navigateToProducts} to="/products">
          Hamısına bax
          <svg
            width="7"
            height="10"
            viewBox="0 0 7 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.50025 10C1.24425 10 0.98825 9.902 0.79325 9.707C0.40225 9.316 0.40225 8.684 0.79325 8.293L4.09825 4.988L0.91825 1.695C0.53525 1.297 0.54625 0.664005 0.94325 0.281005C1.34125 -0.101995 1.97425 -0.0909952 2.35725 0.305005L6.21925 4.305C6.59825 4.698 6.59325 5.321 6.20725 5.70701L2.20725 9.707C2.01225 9.902 1.75625 10 1.50025 10Z"
              fill="#333333"
            />
          </svg>
        </Link>
        <div className="products">
          {!data.products.data && <Loading padding={true} height={false} />}
          {data.products.data &&
            getByCategory(data.products.data, props.categories)
              .reverse()
              .filter((el, i) => {
                if (i > 3) return false;
                return true;
              })
              .map((el) => <ProductInfo info={el} key={el.id} />)}
        </div>
      </Container>
    </StyleProductContainer>
  );
};

export default ProductContainer;
