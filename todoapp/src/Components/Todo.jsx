import React, { useState, useEffect } from "react";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { IoMdColorPalette } from "react-icons/io";
import { RiFileEditFill } from "react-icons/ri";

const Todo = () => {
  // get data fron local storage
  const getItems = () => {
    let localStorageData = localStorage.getItem("todoItem");
    if (localStorageData) {
      return JSON.parse(localStorage.getItem("todoItem"));
    } else {
      return [];
    }
  };
  const [inputData, setInputData] = useState("");
  const [todo, setTodo] = useState(getItems());
  const [submitIcon, setSubmitIcon] = useState(true);
  const [editItemId, setEditItemId] = useState(null);

  const saveInputData = () => {
    if (!inputData) {
      alert("Please fill your Todo");
    } else if (inputData && !submitIcon) {
      setTodo(
        todo.map((el) => {
          if (el.id === editItemId) {
            return { ...el, name: inputData };
          }
          return el;
        })
      );
      setInputData("");
      setEditItemId(null);
      setSubmitIcon(true);
    } else {
      const newDatas = { id: new Date().getTime().toString(), name: inputData };
      setTodo([...todo, newDatas]);
      setInputData("");
      console.log(inputData);
    }
  };
  // delete the todo
  const handleDelete = (index) => {
    let updatedTodos = todo.filter((el) => {
      return el.id !== index;
    });
    setTodo(updatedTodos);
  };

  const removeAllTodos = () => {
    setTodo([]);
  };
  //add data to local storage
  useEffect(() => {
    localStorage.setItem("todoItem", JSON.stringify(todo));
  }, [todo]);

  // edit each  todo
  const handleEdit = (id) => {
    setSubmitIcon(false);
    let newEditTodo = todo.find((el) => {
      return el.id === id;
    });
    console.log(newEditTodo);
    setInputData(newEditTodo.name);
    setEditItemId(id);
  };

  return (
    <>
      <div className="main-div">
        <h1 align="center">Todo Application</h1>
        <div className="child-div">
          <div className="add-item">
            <input
              className="input"
              type="text"
              placeholder="add your todos..."
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
            {submitIcon ? (
              <span className="plus-btn">
                <BsFillPlusSquareFill size="30" onClick={saveInputData} />
              </span>
            ) : (
              <span className="plus-btn" onClick={saveInputData}>
                <RiFileEditFill size="30" />
              </span>
            )}
          </div>

          <div className="added-items">
            {todo.map((el) => {
              return (
                <div className="each-item" key={el.id}>
                  <div className="todoContent">
                    <h3>{el.name}</h3>
                  </div>
                  <div className="todoIcon">
                    <div
                      className="each-todo"
                      onClick={() => handleEdit(el.id)}
                    >
                      <RiFileEditFill />
                    </div>
                    <div
                      className="each-todo"
                      onClick={() => handleDelete(el.id)}
                    >
                      <RiDeleteBin5Fill />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="btn">
            {todo.length >= 1 ? (
              <button onClick={removeAllTodos}>Remove all todos</button>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
