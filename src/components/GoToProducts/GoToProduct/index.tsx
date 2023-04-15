import React from "react";
import { Link } from "react-router-dom";
import StyleGoToProduct from "./style";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
import {
  clearFilter,
  changeBrandList,
  changeCategoryList,
} from "../../../slices/filterSlice";

const GoToProduct: React.FC<{
  grid: boolean;
  title: string;
  padding: boolean;
  id: string;
  img: string;
}> = (props) => {
  const dispatch = useDispatch<AppDispatch>();
  const goToProducts = function () {
    dispatch(clearFilter());
    if (props.id === "accessoires") {
      dispatch(changeBrandList(props.id));
    } else {
      dispatch(changeCategoryList(props.id));
    }
  };

  return (
    <StyleGoToProduct grid={props.grid} padding={props.padding}>
      <div>
        <h2>{props.title}</h2>
        {/* <p>Məhsul sayı: 322</p> */}
        <Link onClick={goToProducts} to="/products">
          Məhsullara keçid
          <svg
            width="7"
            height="14"
            viewBox="0 0 7 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.999495 14C0.773495 14 0.546495 13.924 0.359495 13.768C-0.0645046 13.415 -0.121505 12.784 0.231495 12.36L4.7075 6.989L0.392495 1.627C0.0464955 1.197 0.114495 0.566997 0.544495 0.220997C0.975495 -0.125003 1.6045 -0.0570033 1.9515 0.372997L6.7795 6.373C7.0775 6.744 7.0735 7.274 6.7685 7.64L1.7685 13.64C1.5705 13.877 1.2865 14 0.999495 14Z"
              fill="#3366FF"
            />
          </svg>
        </Link>
      </div>
      <img src={props.img} alt="products" />
    </StyleGoToProduct>
  );
};

export default GoToProduct;
