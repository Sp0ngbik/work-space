import { combineReducers } from "redux";
import addElement from "./addElement";
import { filterElements } from "./filterElements";
import { axiosRequest } from "./axiosRequest";
import { remoteDispatch } from "./remoteDispatch";
import { appReducer } from "./appReducer";
import { sagaReducer } from "../saga/sagaReducer";
import { sagaUserReducer } from "../saga/sagaUserReducer";
import { sagaSliderReducer } from "../saga/sagaSliderReducer";
import { sagaSliderCounter } from "../saga/sagaSliderCounter";
import { knowledgeCheck } from "./knowledgeCheck";
import { secCheckFunc } from "./secCheckFunc";
import { funcAddElement } from "./funcAddElement";
import { funcFilterWords } from "./funcFilterWords";
import { funcUserData } from "./funcUserData";
import { funcAsyncCounter } from "./funcAsyncCounter";
import { vladName } from "./vladName";
export const reducer = combineReducers({
  addElement,
  filterElements,
  axiosRequest,
  remoteDispatch,
  appReducer,
  sagaReducer,
  sagaUserReducer,
  sagaSliderReducer,
  sagaSliderCounter,
  knowledgeCheck,
  secCheckFunc,
  funcAddElement,
  funcFilterWords,
  funcUserData,
  funcAsyncCounter,
  vladName,
});
