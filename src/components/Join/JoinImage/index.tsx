import React from "react";
import StyleJoinImage from "./style";
import dots from "../../../assets/images/join-dots.svg";
import background from "../../../assets/images/join-background.svg";
import { Link, useLocation } from "react-router-dom";

const JoinImage = () => {
  const location = useLocation();

  return (
    <StyleJoinImage>
      <div className="images">
        <img alt="dots" src={dots} />
        <img alt="background" src={background} />
      </div>
      {location.pathname === "/join/login" && (
        <p>
          Hesabınız yoxdur? <Link to="signup">Qeydiyyatdan keçin</Link>
        </p>
      )}
      {location.pathname === "/join/signup" && (
        <p>
          Artıq hesabınız var? <Link to="login">Daxil olun</Link>
        </p>
      )}
    </StyleJoinImage>
  );
};

export default JoinImage;
