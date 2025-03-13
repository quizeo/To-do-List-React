import React, { useState } from "react";

function InputArea(props) {
  const [input, setInput] = useState();

  function handleChange(event) {
    const { value } = event.target;

    setInput(value);
  }
  return (
    <div className="form">
      <input onChange={handleChange} value={input} type="text" />
      <button
        onClick={() => {
          props.onSumbit(input, setInput);
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
