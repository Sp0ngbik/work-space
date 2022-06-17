import { combineReducers, configureStore } from "@reduxjs/toolkit";
import toolkitSlice from "./toolkitSlice";

export const mainReducer = combineReducers({
  toolkit: toolkitSlice,
});
export const store = configureStore({
  reducer: mainReducer,
});
