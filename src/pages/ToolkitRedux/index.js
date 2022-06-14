import { combineReducers, configureStore } from "@reduxjs/toolkit";
import toolkitReducer from "./toolkitReducer";

const mainReducers = combineReducers({ toolkit: toolkitReducer });

export const store = configureStore({
  reducer: mainReducers,
});
