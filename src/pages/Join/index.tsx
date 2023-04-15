import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import JoinImage from "../../components/Join/JoinImage";
import Container from "../../components/UI/Container";
import StyleJoin from "./style";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { Navigate } from "react-router-dom";

const Join = () => {
  const data = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    document.title = "Tello | Register";
  }, []);

  if (data.loggedIn) return <Navigate to="/dashboard" />;

  return (
    <StyleJoin>
      <Container>
        <Outlet />
        <JoinImage />
      </Container>
    </StyleJoin>
  );
};

export default Join;
