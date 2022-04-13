import axios from "axios";
import {
  ADD_ELEMENT,
  AXIOS_ADD,
  FILTER_ELEMENTS,
  LOADER_DIACTIVE,
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
