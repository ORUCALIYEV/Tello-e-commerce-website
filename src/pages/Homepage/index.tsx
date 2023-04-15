import React, { useEffect } from "react";
import Ads from "../../components/Ads";
import FeatureContainer from "../../components/Features/FeatureContainer";
import GoToProductsContainer from "../../components/GoToProducts/GoToProductsContainer";
import HeroSlider from "../../components/Hero/HeroSlider";
import PartnersContainer from "../../components/Partners/PartnersContainer";
import ProductContainer from "../../components/Products/ProductContainer";
import StyleHomepage from "./style";
import { AppDispatch } from "../../store";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../asyncThunk";
import { useLocation } from "react-router-dom";

const Homepage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation();

  useEffect(() => {
    dispatch(fetchProducts());
    window.scrollTo(0, 0);
    document.title = "Tello";
  }, [dispatch, location]);

  return (
    <StyleHomepage>
      <HeroSlider />
      <ProductContainer
        title="Ən çox satılan məhsullar"
        className="best-seller"
        categories={["all-brands"]}
      />
      <ProductContainer
        categories={["new"]}
        title="Yeni gələn məhsullar"
        className=""
      />
      <Ads />
      <ProductContainer
        categories={["new", "accessoires"]}
        title="Yeni gələn aksessuarlar"
        className=""
      />
      <GoToProductsContainer />
      <FeatureContainer />
      <PartnersContainer />
    </StyleHomepage>
  );
};

export default Homepage;
