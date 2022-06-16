import { createAction, createReducer } from "@reduxjs/toolkit";
import { DECREMENT, INCREMENT } from "./actions";

export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);

const initialState = {
  count: 0,
  todos: ["v", "l", "a", "d"],
};

export default createReducer(initialState, {
  [increment]: function (state) {
    state.count = state.count += 1;
  },
  [decrement]: function (state) {
    state.count = state.count -= 1;
  },
});
