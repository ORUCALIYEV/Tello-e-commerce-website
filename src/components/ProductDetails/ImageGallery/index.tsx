import React from "react";
import StyleImageGallery from "./style";
import ReactImageGallery from "react-image-gallery";
import { RootState } from "../../../store";
import { useSelector } from "react-redux";
import { Image } from "../../../models/productInfo";

const ImageGalleryContainer: React.FC<{ selectedColor: number }> = ({
  selectedColor,
}) => {
  const data = useSelector((state: RootState) => state.product);
  const images = data.product.variant_groups[0]
    ? data.product.variant_groups
        .find((el) => el.name === "Color")!
        .options[selectedColor].assets.map((color) => {
          const asset = data.product.assets.find((as) => as.id === color);
          return { original: asset!.url, thumbnail: asset!.url };
        })
    : data.product.assets.map((el: Image) => {
        return { original: el.url, thumbnail: el.url };
      });

  return (
    <StyleImageGallery>
      <ReactImageGallery
        items={images}
        showPlayButton={false}
        showFullscreenButton={false}
      />
    </StyleImageGallery>
  );
};

export default ImageGalleryContainer;
