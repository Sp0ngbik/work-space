import { FUNC_REDUX_FILTER_ELEMENT } from "../types/types";

const initialState = "";
export const funcFilterWords = (state = initialState, action) => {
  switch (action.type) {
    case FUNC_REDUX_FILTER_ELEMENT:
      return action.payload;
    default:
      return state;
  }
};
