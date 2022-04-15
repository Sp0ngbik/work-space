import { Component } from "react";
import { connect } from "react-redux";
import {
  asyncDecrementAction,
  asyncGetSagaUsers,
  asyncIncrementAction,
  nextSliderAction,
  onAddElement,
  onFilterElements,
  sliderDecrement,
  sliderIncrement,
} from "../actions/actions";
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
        <div>
          <button
            onClick={() => {
              this.props.onIncrementElement();
            }}
          >
            Increment++
          </button>
          <button
            onClick={() => {
              this.props.onDecrementElement();
            }}
          >
            Dicrement--
          </button>
          <div>{this.props.sagaReducer}</div>
          <div>
            <button
              onClick={() => {
                this.props.onSagaUsers();
              }}
            >
              Get saga Users
            </button>
          </div>
          <div>
            {this.props.sagaUserTitle.map((el) => (
              <div key={el.id}>
                <div>
                  Name - {el.name} Email - {el.email}
                </div>
              </div>
            ))}
          </div>
          <div>
            <div>
              {this.props.sliderState.length >= 1 ? (
                this.props.sliderState.length <= this.props.sliderCounter ||
                this.props.sliderCounter < 0 ? (
                  <div>
                    <button
                      onClick={() => {
                        this.props.onNextSlider();
                      }}
                    >
                      Next
                    </button>
                    <button
                      onClick={() => {
                        this.props.onPrevSlider();
                      }}
                    >
                      Prev
                    </button>
                    <div>Dont have so much images:D</div>
                  </div>
                ) : (
                  <div>
                    <div>
                      <button
                        onClick={() => {
                          this.props.onNextSlider();
                        }}
                      >
                        Next
                      </button>
                      <button
                        onClick={() => {
                          this.props.onPrevSlider();
                        }}
                      >
                        Prev
                      </button>
                    </div>
                    <img
                      alt={"sadas"}
                      src={this.props.sliderState[this.props.sliderCounter]}
                    />
                  </div>
                )
              ) : null}
            </div>
            <button
              onClick={() => {
                this.props.onShowSlider();
              }}
            >
              Show slider image
            </button>
          </div>
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
    sagaReducer: state.sagaReducer,
    sagaUserTitle: state.sagaUserReducer,
    sliderState: state.sagaSliderReducer,
    sliderCounter: state.sagaSliderCounter,
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
    onIncrementElement: () => {
      dispatch(asyncIncrementAction());
    },
    onDecrementElement: () => {
      dispatch(asyncDecrementAction());
    },
    onNextSlider: () => {
      dispatch(sliderIncrement());
    },
    onPrevSlider: () => {
      dispatch(sliderDecrement());
    },
    onSagaUsers: () => {
      dispatch(asyncGetSagaUsers());
    },
    onShowSlider: () => {
      dispatch(nextSliderAction());
    },
  })
)(ReduxIndex);
