import React, { useEffect } from "react";
import BasketEmpty from "../../components/BasketEmpty";
import Container from "../../components/UI/Container";
import UserProfile from "../../components/UserProfile";
import StyleDashboard from "./style";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { Navigate } from "react-router-dom";

const Dashboard = () => {
  const data = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    document.title = "Tello | Dashboard";
  }, []);

  if (!data.loggedIn) return <Navigate to="/join/signup" />;

  return (
    <StyleDashboard>
      <Container>
        <UserProfile />
        <div>
          <h2 className="selected-header">Sifarişlərim</h2>
          <BasketEmpty />
        </div>
      </Container>
    </StyleDashboard>
  );
};

export default Dashboard;
