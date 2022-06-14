import { createReducer, createAction } from "@reduxjs/toolkit";
import { DECREMENT, INCREMENT } from "./actions";

const initialState = {
  count: 0,
  todo: ["v", "l", "a", "d"],
};

export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);

export default createReducer(initialState, {
  [increment]: function (state) {
    state.count = state.count + 1;
  },
  [decrement]: function (state) {
    state.count = state.count - 1;
  },
});
