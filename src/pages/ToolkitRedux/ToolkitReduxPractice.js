import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./toolkitReducer";

const ToolkitReduxPractice = () => {
  const count = useSelector((state) => state.toolkit.count);

  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        INCREMENT
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        DECREMENT
      </button>
      <div> Счетчик : {count}</div>
    </div>
  );
};

export default ToolkitReduxPractice;
