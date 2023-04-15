import React from "react";
import StyleUserProfile from "./style";
import basket from "../../assets/images/icon-dashboard-basket.svg";
import favorite from "../../assets/images/icon-favorite.svg";
import user from "../../assets/images/icon-account.svg";
import location from "../../assets/images/icon-dashboard-location.svg";
import logout from "../../assets/images/icon-log-out.svg";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { logOutUser } from "../../slices/authSlice";

const UserProfile = () => {
  const dispacth = useDispatch<AppDispatch>();

  return (
    <StyleUserProfile>
      <h2>Profilim</h2>
      <ul>
        <li>
          <div>
            <img src={basket} alt="icon" />
          </div>
          <p>Sifarişlərim</p>
        </li>
        <li>
          <div>
            <img src={favorite} alt="icon" />
          </div>
          <p>Favorilərim</p>
        </li>
        <li>
          <div>
            <img src={user} alt="icon" />
          </div>
          <p>Şəxsi məlumatlar</p>
        </li>
        <li>
          <div>
            <img src={location} alt="icon" />
          </div>
          <p>Çatdırılma ünvanı</p>
        </li>
        <li onClick={() => dispacth(logOutUser())}>
          <div>
            <img src={logout} alt="icon" />
          </div>
          <p>Çıxış</p>
        </li>
      </ul>
    </StyleUserProfile>
  );
};

export default UserProfile;
