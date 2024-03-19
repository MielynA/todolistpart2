import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Todoinput from "./component/Todoinput";
import Todolist from "./component/Todolist";

const App = () => {
  const [items, setItems] = useState([]);
  const [id, setId] = useState(uuidv4());
  const [item, setItem] = useState("");
  const [editItem, setEditItem] = useState(false);

  useEffect(() => {
    const savedItems = localStorage.getItem("items");
    if (savedItems) {
      setItems(JSON.parse(savedItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);


  const handleChange = (e) => {
    setItem(e.target.value);
  };

  const handleClear = () => {
    setItems([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault(e);

    const newItem = {
      id: uuidv4(),
      title: item,
      completed: false,
      created: new Date().toLocaleString()
    };

    const updatedItems = [...items, newItem];
    setItems(updatedItems);
    setId(uuidv4());
    setItem("");
    setEditItem(false);
  };

  const handleDelete = (id) => {
    const deletedItem = items.filter((item) => item.id !== id);
    setItems(deletedItem);
  };

  const toggleComplete = (id) => {
      const updatedItems = items.map((item)=> {
        if(item.id === id) {
          return {
            ...item,
            completed: !item.completed
          }
        }
  return item
      })
      setItems(updatedItems)
  }



  const handleEdit = (id) => {
    const filteredItem = items.filter((item) => item.id !== id);
    const chosenItem = items.find((item) => item.id === id);
    setItems(filteredItem);
    setItem(chosenItem.title);
    setId(id);
    setEditItem(true);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-5">
          <h3 className="text-center">Simple To do list</h3>
        </div>
        <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
        <div className="container">
          <Todoinput
            item={item}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            editItem={editItem}
          />
          <Todolist
            items={items}
            handleClear={handleClear}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            toggleComplete={toggleComplete}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
