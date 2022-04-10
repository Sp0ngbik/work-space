import { ADD_ELEMENT } from "../actions/actions";

const initialState = [];

export default function addElement(state = initialState, action) {
  switch (action.type) {
    case ADD_ELEMENT:
      return [...state, action.payload];
    default:
      return state;
  }
}
