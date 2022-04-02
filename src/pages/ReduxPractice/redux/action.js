import axios from "axios";
import {
  ASYNC_POST,
  CREATE_POST,
  HIDE_ALERT,
  HIDE_LOADER,
  REQUEST_POST,
  SHOW_ALERT,
  SHOW_LOADER,
} from "./types";

export function createPost(post) {
  return {
    type: CREATE_POST,
    payload: post,
  };
}

export function showLoader() {
  return {
    type: SHOW_LOADER,
  };
}

export function hideLoader() {
  return { type: HIDE_LOADER };
}

export function showAlert(text) {
  return (dispatch) => {
    dispatch({
      type: SHOW_ALERT,
      payload: text,
    });
    setTimeout(() => {
      dispatch(hideAlert());
    }, 2000);
  };
}

export function hideAlert() {
  return { type: HIDE_ALERT };
}

export function asyncPosts() {
  return {
    type: REQUEST_POST,
  };
  // return async (dispatch) => {
  //   try {
  //     dispatch(showLoader());
  //     const response = await axios.get(
  //       "https://jsonplaceholder.typicode.com/posts?_limit=5"
  //     );
  //     const json = await response.data;
  //     dispatch({ type: ASYNC_POST, payload: json });
  //     dispatch(hideLoader());
  //   } catch (e) {
  //     dispatch(showAlert("Что-то пошло не так"));
  //     dispatch(hideLoader());
  //   }
  // };
}
