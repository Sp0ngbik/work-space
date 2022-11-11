import { useState } from "react";
import style from "../style.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  asyncDecrement,
  asyncFirstLvlAction,
  asyncIncrement,
  asyncTodoAction,
  funcAsyncPosts,
  hideArrayAction,
  onAddFuncElement,
  onFilterFuncWords,
  reduxFormAction,
} from "../actions/actions";
import { Button, Form, Input } from "antd";

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
  const todoArrayIndicator = useSelector((state) => {
    return state.todoListIndicator;
  });
  const todoArrayList = useSelector((state) => {
    return state.funcAddElement;
  });
  const manyLvlSagaState = useSelector((state) => {
    return state.manyLvlsReducer;
  });
  const formReduxSelector = useSelector((state) => {
    return state.formObjectReducer;
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
  const userGreetForm = (userDataForm) => {
    if (
      userDataForm.reduxName &&
      userDataForm.reduxLastName &&
      userDataForm.reduxTele
    ) {
      return (
        <div>
          Hello user {userDataForm.reduxName + " " + userDataForm.reduxLastName}
          , we got your info and we will recall you at your phone{" "}
          {userDataForm.reduxTele}
        </div>
      );
    } else {
      return <div>Please enter your username, lastname and phone</div>;
    }
  };
  return (
    <div className={style.funcReduxContainer}>
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
      <div>
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
      </div>
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
      <div>
        <button
          onClick={() => {
            dispatch(asyncTodoAction());
          }}
        >
          Full array on list elements
        </button>
        <button
          onClick={() => {
            dispatch(hideArrayAction());
          }}
        >
          Hide array of elements
        </button>
        <div className={style.todoListFuncRedux}>
          {todoArrayIndicator.dispatched === true
            ? todoArrayList.map((el, index) => {
                return <li key={index}>{el}</li>;
              })
            : null}
        </div>
      </div>
      <button
        onClick={() => {
          dispatch(asyncFirstLvlAction());
        }}
      >
        Many lvl's saga
      </button>
      <div>{manyLvlSagaState}</div>
      <Form
        onFinish={(reduxData) => {
          dispatch(reduxFormAction(reduxData));
        }}
        className={style.formRedux}
      >
        <Form.Item name="reduxName">
          <Input placeholder="Ваше имя" type="username" />
        </Form.Item>
        <Form.Item name="reduxLastName">
          <Input placeholder="Ваша фамилия" type="lastname" />
        </Form.Item>
        <Form.Item name="reduxTele">
          <Input placeholder="Ваш телефон" type="tel" />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit">Отправить данные</Button>
        </Form.Item>
      </Form>
      <div>{userGreetForm(formReduxSelector)}</div>
    </div>
  );
};

export default FuncRedux;
