import React from "react";
import StyleCartProduct from "./style";
import deleteIcon from "../../../assets/images/icon-delete.svg";
import azn from "../../../assets/images/icon-azn.svg";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
import {
  deleteItem,
  increaseQuantity,
  decreaseQuantity,
  setLocalStorage,
} from "../../../slices/cartSlice";
import { useNavigate } from "react-router-dom";

interface Props {
  id: string;
  quantity: number;
  name: string;
  price: string;
  img: string;
  color: string;
}

const CartProduct: React.FC<{ info: Props }> = ({ info }) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  return (
    <StyleCartProduct>
      <div className="details">
        <img src={info.img} alt="phone" />
        <p className="name" onClick={() => navigate(`/products/${info.id}`)}>
          {info.name}
        </p>
        <div className="variant">
          <span>Rəng:</span> <p>{info.color}</p>
        </div>
        <div className="price">
          <p>{info.price}</p>
          <img alt="azn" src={azn} />
        </div>
        <div className="quantity">
          <button
            onClick={() => {
              dispatch(decreaseQuantity(info.id));
              dispatch(setLocalStorage());
            }}
          >
            -
          </button>
          <p>{info.quantity}</p>
          <button
            onClick={() => {
              dispatch(increaseQuantity(info.id));
              dispatch(setLocalStorage());
            }}
          >
            +
          </button>
        </div>
      </div>
      <img
        onClick={() => {
          dispatch(deleteItem(info.id));
          dispatch(setLocalStorage());
        }}
        src={deleteIcon}
        alt="delete"
      />
    </StyleCartProduct>
  );
};

export default CartProduct;
