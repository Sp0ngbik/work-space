import { SAGA_HIDE_ARRAY, SAGA_TODO_ARRAY } from "../types/types";

const initialState = { dispatched: false };

export const todoListIndicator = (state = initialState, action) => {
  switch (action.type) {
    case SAGA_TODO_ARRAY:
      return { ...state, dispatched: true };
    case SAGA_HIDE_ARRAY:
      if (state.dispatched === true) {
        return { ...state, dispatched: false };
      } else {
        return { ...state };
      }
    default:
      return state;
  }
};
