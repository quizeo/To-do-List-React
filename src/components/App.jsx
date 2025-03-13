import React, { useState } from "react";
import ToDoItem from "./ToDoItems";
import InputARea from "./InputArea";

function App() {
  const [arrayList, setArrayList] = useState([]);

  const [styledItems, setStyledItems] = useState([]);

  function onSumbit(input, setInput) {
    var addList = input;
    setArrayList((prevValue) => {
      return [...prevValue, addList];
    });
    setInput("");
  }

  function deleteItem(id) {
    if (styledItems.includes(id)) {
      setArrayList((prev) => prev.filter((item, index) => index !== id));
      setStyledItems((prev) => prev.filter((num) => num !== id));
    } else {
      setStyledItems((prev) => [...prev, id]);
    }
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputARea onSumbit={onSumbit} />
      <div>
        <ul>
          {arrayList.map((list, index) => (
            <ToDoItem
              text={list}
              id={index}
              isStyled={styledItems.includes(index)}
              onClickItem={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
