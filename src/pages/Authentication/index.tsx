import React, { useEffect } from "react";
import Loading from "../../components/UI/Loading";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { useParams } from "react-router-dom";
import { getToken } from "../../asyncThunk";
import { Navigate } from "react-router-dom";

const Authentication = () => {
  const data = useSelector((state: RootState) => state.auth);
  const dispacth = useDispatch<AppDispatch>();
  const { token } = useParams();

  useEffect(() => {
    dispacth(getToken(token!));
    document.title = "Tello | Register";
  }, [dispacth, token]);

  if (data.rejected) return <Navigate to="/join/signup" />;
  if (data.loggedIn) return <Navigate to="/dashboard" />;

  return (
    <div>
      <Loading padding={false} height={true} />
    </div>
  );
};

export default Authentication;
