const expensesReducersDefaultState = [];

const expensesReducer = (state = expensesReducersDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];
    default:
      return state;
  }
};
