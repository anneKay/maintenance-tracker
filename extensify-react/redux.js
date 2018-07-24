import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
      return {
        count: state.count + incrementBy,
      };
    case 'DECREMENT':
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
});
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy,
});
store.subscribe(() => { 
  console.log(store.getState());
});
const unsubscribe = store.subscribe(() => { 
  console.log(store.getState());
});
store.dispatch(incrementCount({ incrementBy: 5 }));
// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5,
// });
store.dispatch({
  type: 'INCREMENT',
});

store.dispatch({
  type: 'DECREMENT', 
});