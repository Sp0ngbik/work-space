import axios from "axios";
import { Component } from "react";
import { connect } from "react-redux";
import { ADD_ELEMENT, AXIOS_ADD, FILTER_ELEMENTS } from "../types/types";
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
      <div>
        <div>
          <input type="text" ref={(input) => (this.addElementInput = input)} />
          <button onClick={this.addElement.bind(this)}>Add element</button>
          <button onClick={this.props.onAddAxios}>Add api</button>
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
          {this.props.axiosElements.map((el) => {
            return (
              <div key={el.id}>
                <div>This is title - {el.title}</div>
                <div>This is body - {el.body}</div>
              </div>
            );
          })}
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
      dispatch({ type: ADD_ELEMENT, payload: payload });
    },
    onFilterElements: (filterValue) => {
      dispatch({
        type: FILTER_ELEMENTS,
        payload: filterValue,
      });
    },
    onAddAxios: () => {
      async function asyncRequest() {
        try {
          const response = await axios.get(
            "https://jsonplaceholder.typicode.com/posts?_limit=5"
          );
          const dataTabs = await response.data;
          dispatch({ type: AXIOS_ADD, payload: dataTabs });
        } catch (e) {
          alert("Something wrong");
        }
      }
      asyncRequest();
    },
  })
)(ReduxIndex);
