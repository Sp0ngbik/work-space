import { Spin } from "antd";
import { useState } from "react";

const TryesText = () => {
  const [todo, setTodo] = useState([]);
  const [todoText, setTodoText] = useState();
  const addTodoFunc = (textOfInput) => {
    return setTodo([...todo, textOfInput]);
  };
  const removeTodo = (indexOfTodo) => {
    const arr = todo.splice(indexOfTodo, 1);
    setTodo([...todo]);
  };
  return (
    <div>
      <input
        onChange={(e) => {
          setTodoText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          addTodoFunc(todoText);
        }}
      >
        Add Todo
      </button>
      <div>
        {todo.map((el, index) => {
          return (
            <div>
              <li key={index}>{el}</li>
              <button
                onClick={() => {
                  removeTodo(index);
                }}
              >
                Удалить
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TryesText;
