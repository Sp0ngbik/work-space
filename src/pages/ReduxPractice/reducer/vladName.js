import { SAGA_VLAD } from "../types/types";

const initialState = [];

export const vladName = (state = initialState, action) => {
  switch (action.type) {
    case SAGA_VLAD:
      return action.payload;
    default:
      return state;
  }
};
