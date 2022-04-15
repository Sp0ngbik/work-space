import { NEXT_SLIDER_IMAGE } from "../types/types";

const initialState = {
  imageCounter: null,
  images: [],
};

export const sagaSliderReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEXT_SLIDER_IMAGE:
      return { ...state, imageCounter: action.counter, images: action.payload };
    default:
      return state;
  }
};
