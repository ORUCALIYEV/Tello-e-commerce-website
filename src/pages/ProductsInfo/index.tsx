import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import ChangeToComments from "../../components/Comments/ChangeToComments";
import PagePath from "../../components/PagePath";
import MainContainer from "../../components/ProductDetails/ProductInfo/MainContainer";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../store";
import { fetchProduct } from "../../asyncThunk";
import Loading from "../../components/UI/Loading";
import { useNavigate } from "react-router-dom";

const ProductsInfo = () => {
  const { productId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector((state: RootState) => state.product);

  useEffect(() => {
    dispatch(fetchProduct(productId));
    if (data.error) navigate("/not-found");
    window.scrollTo(0, 0);
    document.title = "Tello | Product Info";
  }, [dispatch, productId, location, data.error, navigate]);

  return (
    <div>
      {!data.product.id && <Loading padding={false} height={true} />}
      {data.product.id && (
        <>
          <PagePath path={data.product.name} products={true} />
          <MainContainer />
          <ChangeToComments />
        </>
      )}
    </div>
  );
};

export default ProductsInfo;
