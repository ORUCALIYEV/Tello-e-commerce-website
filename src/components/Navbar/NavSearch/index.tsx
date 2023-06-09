import React, { useState } from "react";
import StyleNavSearch from "./style";
import SearchContent from "../SearchContent";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
import { changeHistory } from "../../../slices/searchSlice";

const NavSearch: React.FC<{ className: string }> = (props) => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [timerId, setTimerId] = useState<any>();
  const dispatch = useDispatch<AppDispatch>();

  const handleInputChange = function (e: React.ChangeEvent<HTMLInputElement>) {
    clearTimeout(timerId);
    setInput(e.target.value);
    const timer = setTimeout(function () {
      if (e.target.value) dispatch(changeHistory(e.target.value));
    }, 2000);
    setTimerId(timer);
  };

  return (
    <StyleNavSearch className={props.className}>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.66732 14.4999C3.90065 14.4999 0.833984 11.4333 0.833984 7.66659C0.833984 3.89992 3.90065 0.833252 7.66732 0.833252C11.434 0.833252 14.5007 3.89992 14.5007 7.66659C14.5007 11.4333 11.434 14.4999 7.66732 14.4999ZM7.66732 1.83325C4.44732 1.83325 1.83398 4.45325 1.83398 7.66659C1.83398 10.8799 4.44732 13.4999 7.66732 13.4999C10.8873 13.4999 13.5007 10.8799 13.5007 7.66659C13.5007 4.45325 10.8873 1.83325 7.66732 1.83325Z"
          fill="#828282"
        />
        <path
          d="M14.6676 15.1666C14.5409 15.1666 14.4143 15.12 14.3143 15.02L12.9809 13.6866C12.7876 13.4933 12.7876 13.1733 12.9809 12.98C13.1743 12.7866 13.4943 12.7866 13.6876 12.98L15.0209 14.3133C15.2143 14.5066 15.2143 14.8266 15.0209 15.02C14.9209 15.12 14.7943 15.1666 14.6676 15.1666Z"
          fill="#828282"
        />
      </svg>
      <input
        value={input}
        onChange={handleInputChange}
        onFocus={() => setOpen(true)}
        onBlur={() => {
          setOpen(false);
          setInput("");
        }}
        type="text"
        placeholder="Axtarış..."
      />
      {open && <SearchContent input={input} setInput={setInput} />}
    </StyleNavSearch>
  );
};

export default NavSearch;
