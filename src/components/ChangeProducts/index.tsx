import React from "react";
import StyleChangeProducts from "./style";
import order from "../../assets/images/icon-order.svg";
import filter from "../../assets/images/icon-filter.svg";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../store";
import { openFilter, changeOrderVisibility } from "../../slices/filterSlice";
import ListOrder from "../Filter/ListOrder";

const ChangeProducts = () => {
  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector((state: RootState) => state.filter);

  return (
    <StyleChangeProducts>
      <button>
        <img src={order} alt="icon" />
        <p onClick={() => dispatch(changeOrderVisibility())}>Sıralama</p>
        {data.isOpenOrder && <ListOrder />}
      </button>
      <button onClick={() => dispatch(openFilter())}>
        <img src={filter} alt="icon" />
        Filterləmələr
      </button>
    </StyleChangeProducts>
  );
};

export default ChangeProducts;
