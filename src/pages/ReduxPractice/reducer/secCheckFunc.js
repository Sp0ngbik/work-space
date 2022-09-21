import { SEC_CHECK } from "../types/types";

const initialState = [];
export const secCheckFunc = (state = initialState, action) => {
  switch (action.type) {
    case SEC_CHECK:
      return action.payload.map((el) => {
        return el;
      });
    default:
      return state;
  }
};
