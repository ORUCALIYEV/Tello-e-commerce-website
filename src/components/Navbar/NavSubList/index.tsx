import React from "react";
import StyleNavSubList from "./style";
import Container from "../../UI/Container";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
import TypeCategories from "../../../models/categories";
import {
  clearFilter,
  changeBrandList,
  changeCategoryList,
} from "../../../slices/filterSlice";

const NavSubList: React.FC<{
  open: boolean;
  setOpen: (arg: boolean) => void;
  items: { name: string; list: TypeCategories.Child[] };
}> = (props) => {
  const dispatch = useDispatch<AppDispatch>();
  const closeSubcategory = function () {
    props.setOpen(false);
  };

  return (
    <>
      <StyleNavSubList
        onMouseLeave={closeSubcategory}
        className={props.open ? "sub-active" : ""}
      >
        <Container>
          <p onClick={closeSubcategory}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#303030"
              width="15px"
              viewBox="0 0 448 512"
            >
              <path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z" />
            </svg>
            {props.items.name}
          </p>
          {props.items.list.length &&
            props.items.list.map((el) => (
              <li
                key={el.id}
                onClick={() => {
                  dispatch(clearFilter());
                  dispatch(changeBrandList(props.items.name.toLowerCase()));
                  dispatch(changeCategoryList(el.name.toLowerCase()));
                }}
              >
                <Link to={`/products`}>{el.name}</Link>
              </li>
            ))}
        </Container>
      </StyleNavSubList>
    </>
  );
};

export default NavSubList;
