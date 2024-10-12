import { createStore } from "redux";
import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = {
  counter: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state, action) {
      state.counter = state.counter + action.payload;
    },
    decrement(state, action) {
      state.counter = state.counter - action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

/* Reducer - Without reduxjs/toolkit */
/*
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT": {
      return {
        ...state,
        counter: state.counter + action.value,
      };
    }
    case "DECREMENT": {
      return {
        ...state,
        counter: state.counter - action.value,
      };
    }
    case "TOGGLE_COUNTER": {
      return {
        ...state,
        showCounter: !state.showCounter,
      };
    }
    default: {
      return state;
    }
  }
};
const store = createStore(counterReducer);
*/

// const store = createStore(counterSlice.reducer);

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
