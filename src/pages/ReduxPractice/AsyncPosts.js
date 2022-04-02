import { useDispatch, useSelector } from "react-redux";
import { Loader } from "./Loader";
import Post from "./Post";
import { asyncPosts } from "./redux/action";

const AsyncPosts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => {
    return state.posts.asyncPosts;
  });
  const loading = useSelector((state) => {
    return state.app.loading;
  });
  if (loading) {
    return <Loader />;
  }
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
    return posts.map((post) => <Post post={post} key={post.id} />);
  }
};
export default AsyncPosts;
