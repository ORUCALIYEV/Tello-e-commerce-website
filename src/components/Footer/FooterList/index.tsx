import React from "react";
import StyleFooterList from "./style";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
import { clearFilter, changeBrandList } from "../../../slices/filterSlice";
import { Link } from "react-router-dom";

const FooterList: React.FC<{
  list: { name: string; slug: string }[];
  base: string;
}> = ({ list, base }) => {
  const dispatch = useDispatch<AppDispatch>();
  const goToCategory = function (name: string) {
    dispatch(clearFilter());
    dispatch(changeBrandList(name));
  };

  return (
    <StyleFooterList>
      {list.map((el) => (
        <li key={el.name}>
          <Link onClick={() => goToCategory(el.slug)} to={`/${base}`}>
            {el.name}
          </Link>
        </li>
      ))}
    </StyleFooterList>
  );
};

export default FooterList;
