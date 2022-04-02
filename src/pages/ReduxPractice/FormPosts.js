import AsyncPosts from "./AsyncPosts";
import Posts from "./Posts";
import PostForm from "./PostsForm";
import style from "./style.module.scss";
const FormPosts = () => {
  return (
    <div className={style.container}>
      <div>
        <h1>
          <PostForm />
        </h1>
        <h1>Синхронные посты</h1>
        <h1>
          <Posts />
        </h1>
      </div>
      <div>
        <h1>Асинхронные посты</h1>
        <h1>
          <AsyncPosts />
        </h1>
      </div>
    </div>
  );
};
export default FormPosts;
