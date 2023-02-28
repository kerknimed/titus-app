const initialExpensesSelector = ({ expense }) => expense;

const expensesDetailsSelector = ({ expensesDetails }) => expensesDetails;

const isLoadingSelector = ({ fetching }) => fetching;

// const expenseByMonthYearSelector = ({ allMonth, month, year }) => {
//   return { allMonth, month, year };
// };

export {
  initialExpensesSelector,
  expensesDetailsSelector,
  isLoadingSelector,
  // expenseByMonthYearSelector
};
