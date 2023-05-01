import { element, func } from "prop-types";
import { useState } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([
    {
      text: "hello",
      priority: 0,
    },
    {
      text: "hi",
      priority: 0,
    },
    {
      text: "new",
      priority: 0,
    },

  ]);
  const [inputValue, setInputValue] = useState("");
  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function addNewItem(text) {
    const newItems = [...items, { text, priority: 0 }];
    setItems(newItems);
    setInputValue("");
  }

  function handleDeleteClick(id) {
    const newItems = [...items];
    newItems.splice(id, 1);
    setItems(newItems);
  }
  function increasePriority(id) {
    const newItems = [...items];
    newItems[id].priority += 1;
    setItems(newItems);
  }
  function decreasePriority(id) {
    const newItems = [...items];
    newItems[id].priority -= 1;
    setItems(newItems);
  }
  function sortItems() {
    console.log(1);
    const newItems = [...items];
    newItems.sort((b, a) => a.priority - b.priority);
    setItems(newItems);
  }

  return (
    <div className="container">
      <br></br>
      <input
        placeholder="Enter Items"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button
        onClick={() => {
          addNewItem(inputValue);
        }}
      >
        Enter
      </button>
      <ul>
        {items.map((element, index) => {
          return (
            <li key={index}>
              <span>{element.text}</span>
              <button onClick={() => handleDeleteClick(index)}>
                {" "}
                <i className="fas fa-trash"></i>{" "}
              </button>
              <button
                onClick={() => {
                  increasePriority(index);
                }}
              >
                <i className="fas fa-arrow-up"></i>
              </button>
              <span>{element.priority}</span>
              <button
                onClick={() => {
                  decreasePriority(index);
                }}
              >
                <i className="fas fa-arrow-down"></i>
              </button>
            </li>
          );
        })}
      </ul>
      <button onClick={() => sortItems()}>Sort</button>
    </div>
  );
}

export default App;
