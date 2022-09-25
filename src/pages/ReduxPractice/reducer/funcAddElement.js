import { FUNC_REDUX_ADD_ELEMENT } from "../types/types";

const initialState = [];

export function funcAddElement(state = initialState, action) {
  switch (action.type) {
    case FUNC_REDUX_ADD_ELEMENT:
      return [...state, action.payload];
    default:
      return state;
  }
}
