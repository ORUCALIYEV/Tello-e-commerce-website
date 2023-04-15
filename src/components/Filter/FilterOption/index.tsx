import React, { useEffect, useState } from "react";
import StyleFilterOption from "./style";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
import {
  changeBrandList,
  changeCategoryList,
  changePriceList,
} from "../../../slices/filterSlice";

interface Props {
  name: string;
  filterArray: string[];
  id: string;
}

const FilterOption: React.FC<Props> = ({ name, filterArray, id }) => {
  const [checked, setChecked] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (filterArray.includes(name.toLowerCase())) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [filterArray, name]);

  return (
    <StyleFilterOption
      onClick={() => {
        if (id === "brand") dispatch(changeBrandList(name.toLowerCase()));
        if (id === "category") dispatch(changeCategoryList(name.toLowerCase()));
        if (id === "price") dispatch(changePriceList(name.toLowerCase()));
        else setChecked(!checked);
      }}
    >
      <div className={checked ? "checked" : ""}></div>
      <p>{name}</p>
    </StyleFilterOption>
  );
};

export default FilterOption;
