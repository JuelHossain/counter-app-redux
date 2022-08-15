// initial state
const initialCounters = [{ count: 0, incrementBy: 1, decrementBy: 1 }];

// create reducer function
function counterReducer(counters = initialCounters, action) {
  switch (action.type) {
    case "increment":
      return counters.map((counter, index) => {
        if (action.payload.index === index) {
          return { ...counter, count: (counter.count += counter.incrementBy) };
        } else {
          return counter;
        }
      });
      break;
    case "decrement":
      return counters.map((counter, index) => {
        if (action.payload.index === index) {
          return { ...counter, count: (counter.count -= counter.decrementBy) };
        } else {
          return counter;
        }
      });
      break;
    case "addCounter":
      return [
        ...counters,
        {
          count: 0,
          incrementBy: action.payload.incrementBy,
          decrementBy: action.payload.decrementBy,
        },
      ];
      break;
    case "resetCounter":
      return counters.map((counter) => {
        return { ...counter, count: 0 };
      });

    default:
      return counters;
      break;
  }
}

// create redux store
const store = Redux.createStore(counterReducer);
