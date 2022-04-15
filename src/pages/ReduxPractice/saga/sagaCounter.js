import axios from "axios";
import { put, takeEvery, call } from "redux-saga/effects";
import {
  decrementAction,
  getSagaUsers,
  incrementAction,
} from "../actions/actions";
import {
  ASYNC_SAGA_DECREMENT,
  ASYNC_SAGA_INCREMENT,
  ASYNC_SAGA_USERS,
} from "../types/types";
//put своего рода диспатч для синхронных экшн
//call возвращает данные которые прилетают в промисе(подобие async,await)
const delay = (ms) => {
  return new Promise((res) => setTimeout(res, ms));
};

export function* incrementWorker() {
  yield delay(2000);
  yield put(incrementAction());
}

function* decrementWorker() {
  yield delay(2000);
  yield put(decrementAction());
}

function* axiosUserWorker() {
  const serverRequest = () => {
    return axios.get("https://jsonplaceholder.typicode.com/users");
  };
  let data = yield call(serverRequest); //call ждет выполнение промиса
  console.log(data);
  yield put(getSagaUsers(data.data));
}

export function* sagaWatcher() {
  yield takeEvery(ASYNC_SAGA_INCREMENT, incrementWorker);
  yield takeEvery(ASYNC_SAGA_DECREMENT, decrementWorker);
}

export function* userWatcher() {
  yield takeEvery(ASYNC_SAGA_USERS, axiosUserWorker);
}
