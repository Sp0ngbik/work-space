import { all } from "redux-saga/effects";
import {
  sagaFirstLvlWathcer,
  sagaSecondLvlWatcher,
  sagaTodoArrayWatcher,
  sagaWatcher,
  sliderWatcher,
  userWatcher,
} from "../saga/sagaCounter";
//по сути комбинатор watcher'ов
function* rootWatcher() {
  yield all([
    sagaWatcher(),
    userWatcher(),
    sliderWatcher(),
    sagaTodoArrayWatcher(),
    sagaFirstLvlWathcer(),
    sagaSecondLvlWatcher(),
  ]);
}

export default rootWatcher;
