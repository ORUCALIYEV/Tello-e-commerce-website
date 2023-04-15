import React from "react";
import StyleNavAccount from "./style";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { Link, useNavigate } from "react-router-dom";

const NavAccount = () => {
  const navigate = useNavigate();
  const data = useSelector((state: RootState) => state.cart);
  const auth = useSelector((state: RootState) => state.auth);

  return (
    <StyleNavAccount>
      {!auth.loggedIn && (
        <svg
          onClick={() => navigate("/join/signup")}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          width="18"
          height="18"
        >
          <path d="M416 32h-64c-17.67 0-32 14.33-32 32s14.33 32 32 32h64c17.67 0 32 14.33 32 32v256c0 17.67-14.33 32-32 32h-64c-17.67 0-32 14.33-32 32s14.33 32 32 32h64c53.02 0 96-42.98 96-96V128C512 74.98 469 32 416 32zM342.6 233.4l-128-128c-12.51-12.51-32.76-12.49-45.25 0c-12.5 12.5-12.5 32.75 0 45.25L242.8 224H32C14.31 224 0 238.3 0 256s14.31 32 32 32h210.8l-73.38 73.38c-12.5 12.5-12.5 32.75 0 45.25s32.75 12.5 45.25 0l128-128C355.1 266.1 355.1 245.9 342.6 233.4z" />
        </svg>
      )}
      {auth.loggedIn && (
        <svg
          onClick={() => navigate("/dashboard")}
          width="14"
          height="18"
          viewBox="0 0 14 18"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#2dd06e"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9 4C9 2.897 8.103 2 7 2C5.897 2 5 2.897 5 4C5 5.103 5.897 6 7 6C8.103 6 9 5.103 9 4ZM11 4C11 6.206 9.206 8 7 8C4.794 8 3 6.206 3 4C3 1.794 4.794 0 7 0C9.206 0 11 1.794 11 4ZM0 17C0 13.14 3.141 10 7 10C10.859 10 14 13.14 14 17C14 17.552 13.553 18 13 18C12.447 18 12 17.552 12 17C12 14.243 9.757 12 7 12C4.243 12 2 14.243 2 17C2 17.552 1.553 18 1 18C0.447 18 0 17.552 0 17Z"
          />
        </svg>
      )}
      <svg
        width="22"
        height="17"
        viewBox="0 0 22 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.22005 2C5.35605 2 4.54605 2.334 3.94005 2.941C2.68205 4.201 2.68205 6.252 3.94105 7.514L11 14.585L18.06 7.514C19.319 6.252 19.319 4.201 18.06 2.941C16.848 1.726 14.712 1.728 13.5 2.941L11.708 4.736C11.332 5.113 10.668 5.113 10.292 4.736L8.50005 2.94C7.89405 2.334 7.08505 2 6.22005 2ZM11 17C10.735 17 10.48 16.895 10.293 16.706L2.52505 8.926C0.489047 6.886 0.489047 3.567 2.52505 1.527C3.50905 0.543 4.82105 0 6.22005 0C7.61905 0 8.93205 0.543 9.91505 1.527L11 2.614L12.085 1.528C13.069 0.543 14.381 0 15.781 0C17.179 0 18.492 0.543 19.475 1.527C21.512 3.567 21.512 6.886 19.476 8.926L11.708 16.707C11.52 16.895 11.266 17 11 17Z"
        />
      </svg>
      <Link to="/cart">
        <div className="basket">
          <svg
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.382 11H6.764L5.127 5H17.382L14.382 11ZM19.083 3.948C18.716 3.354 18.08 3 17.382 3H4.582L3.965 0.737C3.846 0.302 3.451 0 3 0H1C0.447 0 0 0.448 0 1C0 1.552 0.447 2 1 2H2.236L5.035 12.263C5.154 12.698 5.549 13 6 13H15C15.379 13 15.725 12.786 15.895 12.447L19.171 5.894C19.484 5.269 19.45 4.542 19.083 3.948ZM5.5002 15C4.6722 15 4.0002 15.671 4.0002 16.5C4.0002 17.329 4.6722 18 5.5002 18C6.3282 18 7.0002 17.329 7.0002 16.5C7.0002 15.671 6.3282 15 5.5002 15ZM14.0002 16.5C14.0002 15.671 14.6722 15 15.5002 15C16.3282 15 17.0002 15.671 17.0002 16.5C17.0002 17.329 16.3282 18 15.5002 18C14.6722 18 14.0002 17.329 14.0002 16.5Z"
            />
          </svg>
          <p>{data.totalQuantity}</p>
        </div>
      </Link>
    </StyleNavAccount>
  );
};

export default NavAccount;
