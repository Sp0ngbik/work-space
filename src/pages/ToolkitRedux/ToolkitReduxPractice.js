import style from "./style.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  decrement,
  filter,
  increment,
  removeLastTodo,
} from "./toolkitSlice";
import { useState } from "react";
//Убрать перезаписывание стейта
const ToolkitReducPractice = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => {
    return state.toolkit.count;
  });
  const [filterWords, setFilterWords] = useState();
  const todo = useSelector((state) => {
    return state.toolkit.todo;
  });

  return (
    <div className={style.mainBlockRedux}>
      <div>
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          increment
        </button>
        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          decrement
        </button>
        <div>{count}</div>
      </div>
      <div>
        <button
          onClick={() => {
            dispatch(addTodo(prompt()));
          }}
        >
          Add todo
        </button>
        <button
          onClick={() => {
            dispatch(removeLastTodo());
          }}
        >
          Remove last todo
        </button>
        <input
          type="text"
          ref={(input) => {
            setFilterWords(input);
          }}
        />
        <button
          onClick={() => {
            dispatch(filter(filterWords.value));
          }}
        >
          set filter
        </button>
        <div>
          {todo.map((el) => {
            return <p key={el}>{el}</p>;
          })}
        </div>
      </div>
    </div>
  );
};

export default ToolkitReducPractice;
