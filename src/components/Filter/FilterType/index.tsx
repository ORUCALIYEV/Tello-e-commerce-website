import React, { useState } from "react";
import FilterOption from "../FilterOption";
import StyleFilterType from "./style";

interface Props {
  title: string;
  id: string;
  list: string[];
  filterArray: string[];
}

const FilterType: React.FC<Props> = ({ title, list, id, filterArray }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <StyleFilterType open={open}>
      <header onClick={() => setOpen(!open)}>
        <p>{title}</p>
        <div className="icon">
          <div></div>
          <div></div>
        </div>
      </header>
      {open && (
        <ul>
          {list.map((el) => (
            <FilterOption
              id={id}
              filterArray={filterArray}
              name={el}
              key={el}
            />
          ))}
        </ul>
      )}
    </StyleFilterType>
  );
};

export default FilterType;
