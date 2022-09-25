import { FUNC_REDUX_DECREMENT, FUNC_REDUX_INCREMENT } from "../types/types";

const initialState = 0;

export const funcAsyncCounter = (state = initialState, action) => {
  switch (action.type) {
    case FUNC_REDUX_INCREMENT:
      return (state += 1);
    case FUNC_REDUX_DECREMENT:
      return (state -= 1);
    default:
      return state;
  }
};
