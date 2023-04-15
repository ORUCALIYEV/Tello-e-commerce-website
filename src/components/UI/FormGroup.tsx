import React from "react";
import styled from "styled-components";

const StyleFormGroup = styled.div`
  color: var(--color-dark-gray);
  font-size: 1.4rem;
  line-height: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  input {
    background: #f2f2f2;
    border-radius: var(--border-radius);
    border: 0;
    outline: 0;
    padding: 1.4rem 1.6rem;
  }

  input::placeholder {
    color: #828282;
  }
`;

interface Props {
  type: string;
  placeholder: string;
  id: string;
  label: string;
}

const FormGroup: React.FC<Props> = (props) => {
  return (
    <StyleFormGroup>
      <label htmlFor={props.id}>{props.label}</label>
      <input id={props.id} type={props.type} placeholder={props.placeholder} />
    </StyleFormGroup>
  );
};

export default FormGroup;
