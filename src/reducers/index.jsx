import {
  FETCHING_INITIAL_EXPENSES,
  FETCH_EXPENSE_ID,
  FETCHED_DETAILS_SUCCESS,
  FETCHED_SUCCESS,
  UPDATE,
  FAILED,
  UPDATE_FAILED,
  DELETE,
  SAVE,
} from "../actions/types";

const INITIAL_STATE = {
  fetching: false,
  expense: null,
  allMonth: false,
  expensesDetails: []
};

const expenseReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCHING_INITIAL_EXPENSES:
      return { ...state, fetching: true, allMonth: true };
    case FETCH_EXPENSE_ID:
      return { ...state, fetching: true };
    case FETCHED_SUCCESS:
      return { ...state, fetching: false, expense: action.payload };
    case FETCHED_DETAILS_SUCCESS:
      
      return { ...state, fetching: false, expensesDetails: [...state.expensesDetails, action.expensesDetails] };
    case FAILED:
      return { ...state, fetching: false };
    case SAVE:
      return { ...state, fetching: false };
    case UPDATE:
      return { ...state, fetching: false };
    case UPDATE_FAILED:
      return { ...state, fetching: false };
    case DELETE:
      return { ...state, fetching: false, expensesDetails: [...state.expensesDetails.filter(expense => expense.id !== action.deletedExpenseId)] };
    default:
      return state;
  }
};

export default expenseReducer;
