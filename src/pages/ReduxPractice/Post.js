import style from "./style.module.scss";

const Post = ({ post }) => {
  return <div className={style.postContainer}>{post.title}</div>;
};
export default Post;
