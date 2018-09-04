export const addExpense = ({description = '', note = '', amount = '', createdAt = ''}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: '1',
    amount,
    description,
    note,
    createdAt,
  }

})