import axios from "axios";
import {
  ADD_ELEMENT,
  ASYNC_SAGA_DECREMENT,
  ASYNC_SAGA_INCREMENT,
  ASYNC_SAGA_SLIDER,
  ASYNC_SAGA_USERS,
  ASYNC_TODO_ARRAY,
  AXIOS_ADD,
  FILTER_ELEMENTS,
  FUNC_REDUX_ADD_ELEMENT,
  FUNC_REDUX_DECREMENT,
  FUNC_REDUX_DOWNLOAD_USERS,
  FUNC_REDUX_FILTER_ELEMENT,
  FUNC_REDUX_INCREMENT,
  HIDE_SLIDER_IMAGE,
  LOADER_DIACTIVE,
  SAGA_DECREMENT,
  SAGA_HIDE_ARRAY,
  SAGA_INCREMENT,
  SAGA_SLIDER_DECREMENT,
  SAGA_SLIDER_INCREMENT,
  SAGA_TODO_ARRAY,
  SAGA_USERS,
  SEC_CHECK,
  SHOW_SLIDER_IMAGE,
} from "../types/types";

export function onAddElement(payload) {
  return { type: ADD_ELEMENT, payload: payload };
}

export function onFilterElements(filterValue) {
  return {
    type: FILTER_ELEMENTS,
    payload: filterValue,
  };
}

export function asyncPosts() {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
      );
      const dataTabs = await response.data;
      dispatch({ type: AXIOS_ADD, payload: dataTabs });
      dispatch(turnOffLoading());
    } catch (e) {
      alert("Something wrong");
    }
  };
}

export function turnOffLoading() {
  return {
    type: LOADER_DIACTIVE,
  };
}

export function asyncIncrementAction() {
  return { type: ASYNC_SAGA_INCREMENT };
}

export function incrementAction() {
  return {
    type: SAGA_INCREMENT,
  };
}

export function decrementAction() {
  return {
    type: SAGA_DECREMENT,
  };
}
export function asyncDecrementAction() {
  return { type: ASYNC_SAGA_DECREMENT };
}

export function getSagaUsers(payload) {
  return { type: SAGA_USERS, payload };
}

export function asyncGetSagaUsers() {
  return { type: ASYNC_SAGA_USERS };
}

export function showSliderAction() {
  return { type: ASYNC_SAGA_SLIDER };
}

export function sliderAction(payload) {
  return { type: SHOW_SLIDER_IMAGE, payload };
}
export function hideSliderAction() {
  return { type: HIDE_SLIDER_IMAGE };
}

export function sliderIncrement() {
  return { type: SAGA_SLIDER_INCREMENT };
}
export function sliderDecrement() {
  return { type: SAGA_SLIDER_DECREMENT };
}

export function knowledgeCheckFunction() {
  return { type: SEC_CHECK, payload: [1, 2, 3] };
}

//func redux actions

export function onAddFuncElement(payload) {
  return { type: FUNC_REDUX_ADD_ELEMENT, payload: payload };
}

export function onFilterFuncWords(payload) {
  return { type: FUNC_REDUX_FILTER_ELEMENT, payload: payload };
}

export function funcAsyncPosts() {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
      );
      const baseTabs = await response.data;
      dispatch({ type: FUNC_REDUX_DOWNLOAD_USERS, payload: baseTabs });
    } catch (e) {
      alert("Something went wrong");
    }
  };
}

export function asyncIncrement() {
  return { type: FUNC_REDUX_INCREMENT };
}
export function asyncDecrement() {
  return { type: FUNC_REDUX_DECREMENT };
}

//saga-todo
export function asyncTodoAction() {
  return { type: ASYNC_TODO_ARRAY };
}
export function todoArrayAction() {
  return { type: SAGA_TODO_ARRAY, payload: { dispatched: true } };
}

export function hideArrayAction() {
  return { type: SAGA_HIDE_ARRAY, payload: { dispatched: false } };
}
