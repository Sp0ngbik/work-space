import axios from "axios";
import {
  ADD_ELEMENT,
  ASYNC_SAGA_DECREMENT,
  ASYNC_SAGA_INCREMENT,
  ASYNC_SAGA_SLIDER,
  ASYNC_SAGA_USERS,
  AXIOS_ADD,
  FILTER_ELEMENTS,
  LOADER_DIACTIVE,
  NEXT_SLIDER_IMAGE,
  SAGA_DECREMENT,
  SAGA_INCREMENT,
  SAGA_USERS,
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

export function nextSliderAction() {
  return { type: ASYNC_SAGA_SLIDER };
}

export function sliderAction(payload) {
  return { type: NEXT_SLIDER_IMAGE, payload };
}
