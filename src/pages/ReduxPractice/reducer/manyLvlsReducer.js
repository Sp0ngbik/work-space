import { SAGA_FIRST_LVL, SAGA_SECOND_LVL } from "../types/types";

const initialState = "right now lvl 0";

export const manyLvlsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAGA_FIRST_LVL:
      return (state = action.payload);
    case SAGA_SECOND_LVL:
      return (state = action.payload);
    default:
      return state;
  }
};
