import { Component } from "react";
import { connect } from "react-redux";

class ReduxIndex extends Component {
  addElement() {
    this.props.onAddElement(this.addElementInput.value);
    this.addElementInput.value = "";
  }
  render() {
    return (
      <div>
        <input type="text" ref={(input) => (this.addElementInput = input)} />
        <button onClick={this.addElement.bind(this)}>Добавить элемент</button>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    state,
  }),
  (dispatch) => ({
    onAddElement: (inputValue) => {
      dispatch({ type: "ADD_ELEMENT", payload: inputValue });
    },
  })
)(ReduxIndex);
