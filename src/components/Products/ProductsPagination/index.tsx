import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import StyleProductsPagination from "./style";
import AllProducts from "../AllProducts";
import TypeProducts from "../../../models/products";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

const ProductsPagination: React.FC<{ itemsPerPage: number }> = ({
  itemsPerPage,
}) => {
  const { displayedProducts } = useSelector((state: RootState) => state.filter);
  const [currentItems, setCurrentItems] = useState<TypeProducts.Datum[] | null>(
    null
  );

  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(displayedProducts.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(displayedProducts.length / itemsPerPage));
  }, [itemOffset, displayedProducts, itemsPerPage]);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset =
      (event.selected * itemsPerPage) % displayedProducts.length;
    setItemOffset(newOffset);
  };

  return (
    <StyleProductsPagination>
      <AllProducts currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={4}
        pageCount={pageCount}
        previousLabel="<"
      />
    </StyleProductsPagination>
  );
};

export default ProductsPagination;
