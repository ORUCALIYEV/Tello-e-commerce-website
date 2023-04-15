import React, { useState } from "react";
import Container from "../../../UI/Container";
import ImageGalleryContainer from "../../ImageGallery";
import AddToBasket from "../AddToBasket";
import ProductData from "../ProductData";
import ProductVariants from "../ProductVariants";
import StyleMainContainer from "./style";

const MainContainer = () => {
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedStorage, setSelectedStorage] = useState(0);

  return (
    <StyleMainContainer>
      <Container>
        <ImageGalleryContainer selectedColor={selectedColor} />
        <div>
          <ProductData
            setSelectedStorage={setSelectedStorage}
            selectedStorage={selectedStorage}
          />
          <ProductVariants
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
            setSelectedStorage={setSelectedStorage}
            selectedStorage={selectedStorage}
          />
          <AddToBasket
            selectedColor={selectedColor}
            selectedStorage={selectedStorage}
          />
        </div>
      </Container>
    </StyleMainContainer>
  );
};

export default MainContainer;
