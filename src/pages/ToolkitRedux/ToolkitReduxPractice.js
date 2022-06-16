import { useDispatch, useSelector } from "react-redux";
import { addTodo, decrement, increment, removeLastTodo } from "./toolkitSlice";

const asyncTestTodo = () => {
  return async (dispatch) => {
    setTimeout(() => {
      dispatch(addTodo("Async"));
    }, 2000);
  };
};
const ToolkitReducPractice = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => {
    return state.toolkit.count;
  });
  const todo = useSelector((state) => {
    return state.toolkit.todo;
  });
  return (
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
      <button
        onClick={() => {
          dispatch(addTodo(prompt()));
        }}
      >
        Add todo
      </button>
      <button
        onClick={() => {
          dispatch(asyncTestTodo());
        }}
      >
        Async todo
      </button>
      <button
        onClick={() => {
          dispatch(removeLastTodo());
        }}
      >
        Remove last todo
      </button>
      <div>{count}</div>
      <div>
        {todo.map((el) => {
          return <p>{el}</p>;
        })}
      </div>
    </div>
  );
};

export default ToolkitReducPractice;
