import React from "react";
import FormGroup from "../../UI/FormGroup";
import StyleCommentForm from "./style";

const CommentForm = () => {
  return (
    <StyleCommentForm>
      <h2>Rəy Bildir</h2>
      <form>
        <FormGroup
          label="Ad"
          id="name"
          placeholder="Adınızı daxil edin"
          type="text"
        />
        <FormGroup
          label="Soyad"
          id="surname"
          placeholder="Soyadınızı daxil edin"
          type="text"
        />
        <div>
          <label htmlFor="product">Rəy bildirdiyiniz məhsulu seçin</label>
          <select id="product">
            <option>Məhsulu seçin</option>
            <option>Product 1</option>
            <option>Product 2</option>
            <option>Product 3</option>
          </select>
        </div>
        <div>
          <label htmlFor="review">Rəyinizi yazın</label>
          <textarea
            rows={5}
            id="review"
            placeholder="Rəyinizi buraya yazın"
          ></textarea>
        </div>
        <button>Rəyini bildir</button>
      </form>
    </StyleCommentForm>
  );
};

export default CommentForm;
