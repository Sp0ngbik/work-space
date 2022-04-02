import { CREATE_POST } from "./types";
import { showAlert } from "./action";
const forbidden = ["fuck", "cock", "ass"];

export function spamWordsMiddleware({ dispatch }) {
  return function (next) {
    return function (action) {
      if (action.type === CREATE_POST) {
        const found = forbidden.filter((w) => action.payload.title.includes(w));
        if (found.length) {
          return dispatch(showAlert("Неподходящее слово"));
        }
      } else {
        return next(action);
      }
    };
  };
}
