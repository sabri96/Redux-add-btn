import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";

import {
  increment,
  decrement,
  reset,
  toggleVisibility
} from "./Actions/counterAction";

const Counter = () => {
  // useDispatch replaces mapDispatchToProps
  const dispatch = useDispatch();

  // useSelector replaces mapStateToProps
  const counter = useSelector((state) => state.counter);
  const isVisible = useSelector((state) => state.isVisible);

  console.log(isVisible);
  return (
    <div>
      <button
        className="visibility-btn"
        onClick={() => dispatch(toggleVisibility())}
      >
        {isVisible ? "Hide Counter" : "Show Counter"}
      </button>
      {isVisible ? (
        <>
          <h1>COUNTER</h1>
          <button
            className="decrement-btn"
            onClick={() => dispatch(decrement())}
          >
            -
          </button>
          <span>{counter} </span>
          <button
            className="increment-btn"
            onClick={() => dispatch(increment())}
          >
            +
          </button>
          <br />
          <button className="reset-btn" onClick={() => dispatch(reset())}>
            Reset
          </button>
        </>
      ) : null}
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//     isVisible: state.isVisible
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch(increment()),
//     decrement: () => dispatch(decrement()),
//     reset: () => dispatch(reset()),
//     toggleVisibility: () => dispatch(toggleVisibility())
//   };
// };

export default connect()(Counter);

