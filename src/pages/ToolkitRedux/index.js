import { combineReducers, configureStore } from "@reduxjs/toolkit";
import filterSlice from "./filterSlice";
import toolkitSlice from "./toolkitSlice";

export const mainReducer = combineReducers({
  toolkit: toolkitSlice,
  filter: filterSlice,
});
export const store = configureStore({
  reducer: mainReducer,
});
