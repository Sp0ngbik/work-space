import { SAGA_TODO_ARRAY } from "../types/types";

const initialState = { dispatched: false };

export const todoListIndicator = (state = initialState, action) => {
  switch (action.type) {
    case SAGA_TODO_ARRAY:
      return { ...state, dispatched: true };
    default:
      return state;
  }
};
