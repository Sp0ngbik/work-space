import { NEXT_SLIDER_IMAGE } from "../types/types";

const initialState = [];
export const sagaSliderReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEXT_SLIDER_IMAGE:
      return action.payload;
    default:
      return state;
  }
};
