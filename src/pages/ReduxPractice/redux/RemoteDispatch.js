import { useDispatch, useSelector } from "react-redux";
import { REMOTE_DISPATCH } from "../types/types";

const RemoteDispatch = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => {
    return state.addElement;
  });
  function loadFunc() {
    return dispatch({ type: REMOTE_DISPATCH, payload: posts });
  }
  return (
    <button
      onClick={() => {
        loadFunc();
      }}
    >
      Удаленный диспатчер
    </button>
  );
};

export default RemoteDispatch;
