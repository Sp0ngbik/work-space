import { SAGA_SLIDER_DECREMENT, SAGA_SLIDER_INCREMENT } from "../types/types";

const initialState = 0;
export const sagaSliderCounter = (state = initialState, action) => {
  switch (action.type) {
    case SAGA_SLIDER_INCREMENT:
      return (state += 1);
    case SAGA_SLIDER_DECREMENT:
      return (state -= 1);
    default:
      return state;
  }
};
