import React from "react";
import style from "./style.module.scss";
import { connect } from "react-redux";
import { createPost, showAlert } from "./redux/action";
import { AlertJSX } from "./Alert";
class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }
  submitHandler = (event) => {
    event.preventDefault();
    const { title } = this.state;
    if (!title.trim()) {
      return this.props.showAlert("Название поста не может быть пустым");
    }
    const newPost = {
      title,
      id: Date.now().toString(),
    };
    this.props.createPost(newPost);
    this.setState({ title: "" });
  };
  changeInputHandler = (event) => {
    event.persist();
    this.setState((prev) => ({
      ...prev,
      ...{
        [event.target.name]: event.target.value,
      },
    }));
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        {this.props.alert && <AlertJSX text={this.props.alert} />}
        <div className={style.inputField}>
          <label htmlFor="title">Заголовок поста</label>
          <input
            name="title"
            value={this.state.title}
            type="text"
            id="title"
            onChange={this.changeInputHandler}
          />
        </div>
        <button type="submit">Создать</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  alert: state.app.alert,
});

const mapDispatchToProps = {
  createPost,
  showAlert,
};
export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
