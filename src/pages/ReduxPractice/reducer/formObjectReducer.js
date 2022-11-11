import { SAGA_OBJECT } from "../types/types";

const initialState = [];
export const formObjectReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAGA_OBJECT:
      return action.payload;
    default:
      return state;
  }
};
