import React from "react";
import StyleSpecificationType from "./style";

const SpecificationType: React.FC<{ title: string }> = ({ title }) => {
  return (
    <StyleSpecificationType>
      <h2>{title}</h2>
      <ul>
        <li>
          <p>İstehsalçı</p>
          <p>Apple</p>
        </li>
        <li>
          <p>İstehsalçı</p>
          <p>Apple</p>
        </li>
        <li>
          <p>İstehsalçı</p>
          <p>Apple</p>
        </li>
        <li>
          <p>İstehsalçı</p>
          <p>Apple</p>
        </li>
      </ul>
    </StyleSpecificationType>
  );
};

export default SpecificationType;
