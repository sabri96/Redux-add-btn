import {
    INCREMENT,
    DECREMENT,
    RESET,
    TOGGLE_VISIBILITY
  } from "../constants/actionsTypes";
  
  const initialState = {
    counter: 0,
    isVisible: false
  };
  
  const counterReducer = (state = initialState, action) => {
    switch (action.type) {
      case INCREMENT:
        return { ...state, counter: state.counter + 1 };
      case DECREMENT:
        return { ...state, counter: state.counter > 0 ? state.counter - 1 : 0 };
      case RESET:
        return { ...state, counter: 0 };
      case TOGGLE_VISIBILITY:
        return { ...state, isVisible: !state.isVisible };
      default:
        return state;
    }
  };
  
  export default counterReducer;
  