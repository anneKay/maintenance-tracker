import { createStore, combineReducers } from 'redux';


const expensesReducersDefaultState = [];
const filterDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDATE: undefined,
}
const addExpense = ({description = '', note = '', amount = '', createdAt = ''}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: '1',
    amount,
    description,
    note,
    createdAt,
  }

})
const expensesReducer = (state = expensesReducersDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];
    default:
      return state;
  }
};

const filterReducer = (state = filterDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
const store = createStore(combineReducers({
  expenses: expensesReducer,
  filter: filterReducer,
}));

store.subscribe(() => {
  store.getState();
})
store.dispatch(addExpense({description: 'desc', amount: '100'}))
store.dispatch(addExpense({description: 'desc', amount: '101'}))
console.log(store.getState());
const demoState = {
  expenses: [{
    id: 'ajdjf',
    description: 'description',
    note: 'this is a note',
    amount: '2000',
    createdAt: 0

  }],
  filters: {
    text: 'this is a text',
    sortBy: 'amount',
    startDate: undefined,
    endDATE: undefined,
  },  
}