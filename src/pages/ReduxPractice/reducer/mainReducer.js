import { combineReducers } from "redux";
import addElement from "./addElement";
import { filterElements } from "./filterElements";
import { axiosRequest } from "./axiosRequest";
import { remoteDispatch } from "./remoteDispatch";
export const reducer = combineReducers({
  addElement,
  filterElements,
  axiosRequest,
  remoteDispatch,
});
