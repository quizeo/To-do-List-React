import React, { useState } from "react";

function ToDoItems(props) {
  return (
    <li
      onClick={() => {
        props.onClickItem(props.id);
      }}
      style={{ textDecoration: props.isStyled ? "line-through" : "none" }}
      key={props.id}
    >
      {props.text}
    </li>
  );
}

export default ToDoItems;
