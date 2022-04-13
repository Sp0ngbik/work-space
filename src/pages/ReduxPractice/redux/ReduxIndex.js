import { Component } from "react";
import { connect } from "react-redux";
import { onAddElement, onFilterElements } from "../actions/actions";
import AxiosPost from "./AxiosPost";
import RemoteDispatch from "./RemoteDispatch";
import style from "../style.module.scss";
class ReduxIndex extends Component {
  addElement() {
    if (this.addElementInput.value.trim() === "") {
      alert("You can't add empty string");
    } else {
      this.props.onAddElement(this.addElementInput.value);
      this.addElementInput.value = "";
    }
  }
  filterElement() {
    this.props.onFilterElements(this.filterElementInput.value);
  }

  render() {
    return (
      <div className={style.reduxContainer}>
        <div>
          <input type="text" ref={(input) => (this.addElementInput = input)} />
          <button onClick={this.addElement.bind(this)}>Add element</button>
        </div>
        <div>
          <input
            type="text"
            ref={(input) => (this.filterElementInput = input)}
          />
          <button onClick={this.filterElement.bind(this)}>
            Filter elements
          </button>
        </div>
        <div>
          <ul>
            {this.props.elements.map((el, index) => {
              return <li key={index}>{el.inputValue}</li>;
            })}
          </ul>
        </div>
        <div>
          <RemoteDispatch />
          <AxiosPost />
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    elements: state.addElement.filter((word) =>
      word.inputValue.includes(state.filterElements)
    ),
    axiosElements: state.axiosRequest,
  }),
  (dispatch) => ({
    onAddElement: (inputValue) => {
      const payload = {
        id: Date.now().toString(),
        inputValue,
      };
      dispatch(onAddElement(payload));
    },
    onFilterElements: (filterValue) => {
      dispatch(onFilterElements(filterValue));
    },
  })
)(ReduxIndex);
