import { combineReducers } from "redux";
import addElement from "./addElement";
import { filterElements } from "./filterElements";
import { axiosRequest } from "./axiosRequest";
import { remoteDispatch } from "./remoteDispatch";
import { appReducer } from "./appReducer";
export const reducer = combineReducers({
  addElement,
  filterElements,
  axiosRequest,
  remoteDispatch,
  appReducer,
});
