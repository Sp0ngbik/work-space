import { FUNC_REDUX_DOWNLOAD_USERS } from "../types/types";

const initialState = [];

export const funcUserData = (state = initialState, action) => {
  switch (action.type) {
    case FUNC_REDUX_DOWNLOAD_USERS:
      return action.payload;
    default:
      return state;
  }
};
