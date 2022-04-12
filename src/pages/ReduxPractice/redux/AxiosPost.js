import { useDispatch, useSelector } from "react-redux";
import { asyncPosts } from "../actions/actions";

const AxiosPost = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => {
    return state.axiosRequest;
  });
  if (!posts.length) {
    return (
      <button
        onClick={() => {
          dispatch(asyncPosts());
        }}
      >
        Загрузить
      </button>
    );
  } else {
    posts.map((post) => <div>{post.title}</div>);
  }
};

export default AxiosPost;
