// Action Identifiers;
const INCREMENT = "increment";
const DECREMENT = "decrement";
const ADD_COUNTER = "addCounter";
const RESET_COUNTER = "resetCounter";

// increment dispatch function
function increment(index) {
  return {
    type: INCREMENT,
    payload: {
      index,
    },
  };
}

// decrement dispatch function
function decrement(index) {
  return {
    type: DECREMENT,
    payload: {
      index,
    },
  };
}
// add counter dispatch function
function addCounter() {
  return {
    type: ADD_COUNTER,
    payload: {
      incrementBy: Math.floor(Math.random() * 10 + 1),
      decrementBy: Math.floor(Math.random() * 10 + 1),
    },
  };
}
function resetCounter() {
  return {
    type: RESET_COUNTER,
  };
}
// button click listeners
function incrementClick(index) {
  store.dispatch(increment(index));
}
function decrementClick(index) {
  store.dispatch(decrement(index));
}
function addCounterClick() {
  store.dispatch(addCounter());
}
function resetCounterClick() {
  store.dispatch(resetCounter());
}
