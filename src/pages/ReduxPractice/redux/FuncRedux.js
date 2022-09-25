import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  asyncDecrement,
  asyncIncrement,
  funcAsyncPosts,
  onAddFuncElement,
  onFilterFuncWords,
} from "../actions/actions";

const FuncRedux = () => {
  const dispatch = useDispatch();
  const [elementInputValue, setElementInputValue] = useState();
  const [filterInputValue, setFilterInputValue] = useState();
  const addElement = (element) => {
    onAddedElement(element);
  };
  //selectors
  const filterElementState = useSelector((state) => {
    return state.funcFilterWords;
  });
  const addElementState = useSelector((state) => {
    return state.funcAddElement.filter((word) => {
      return word.includes(filterElementState);
    });
  });
  const userAsyncData = useSelector((state) => {
    return state.funcUserData;
  });
  const counterState = useSelector((state) => {
    return state.funcAsyncCounter;
  });
  //funcWorkers
  const onAddedElement = (inputValue) => {
    const payload = inputValue;
    dispatch(onAddFuncElement(payload));
    document.getElementById("input_value").value = "";
  };

  const onFilterElement = (filterValue) => {
    const payload = filterValue;
    dispatch(onFilterFuncWords(payload));
  };
  return (
    <div>
      <div>
        <input
          id="input_value"
          type="text"
          onChange={(event) => {
            setElementInputValue(event.target.value);
          }}
        />
        <button
          onClick={() => {
            addElement(elementInputValue);
          }}
        >
          Add element
        </button>
      </div>
      <input
        id="filter_input_value"
        type="text"
        onChange={(event) => {
          setFilterInputValue(event.target.value);
        }}
      />
      <button
        onClick={() => {
          onFilterElement(filterInputValue);
        }}
      >
        Filter button
      </button>
      <div>
        {addElementState.map((el, index) => {
          return <li key={index}>{el}</li>;
        })}
      </div>
      <div>Check filtered Value : {filterElementState} </div>
      <div>
        <button
          onClick={() => {
            dispatch(funcAsyncPosts());
          }}
        >
          Загрузить данные
        </button>
        <div>
          {userAsyncData.map((el) => {
            return <div key={el.id}>{`${el.id + " " + el.title}`}</div>;
          })}
        </div>
      </div>
      <div>
        <button
          onClick={() => {
            dispatch(asyncIncrement());
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            dispatch(asyncDecrement());
          }}
        >
          Decrement
        </button>
        <div>{counterState}</div>
      </div>
    </div>
  );
};

export default FuncRedux;
