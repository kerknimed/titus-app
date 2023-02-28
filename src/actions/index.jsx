import {
  FETCHING_INITIAL_EXPENSES,
  FETCH_EXPENSE_ID,
  SAVE,
  UPDATE,
  UPDATE_FAILED,
  DELETE,
  FETCHED_SUCCESS,
  FAILED,
  FETCHED_DETAILS_SUCCESS
} from "./types";

import {
  serviceFetchExpense,
  serviceFetchExpenseById,
  serviceUpdateExpense,
  serviceDeleteExpense,
  serviceSaveExpense,
} from "../services/ExpenseServices";

export const fetchInitialExpenses = () => {
  return (dispatch) => {
    dispatch({ type: FETCHING_INITIAL_EXPENSES });
    serviceFetchExpense()
      .then((data) => {
        dispatch({ type: FETCHED_SUCCESS, payload: data });
      })
      .catch((e) => {
        dispatch({ type: FAILED });
      });
  };
};

export const fetchExpenseById = (id) => {
  return (dispatch) => {
    try {
      dispatch({ type: FETCH_EXPENSE_ID });
      serviceFetchExpenseById(id).then((data) => {
        const { record, metadata: { id } } = data;
        record.id = id
        dispatch({ type: FETCHED_DETAILS_SUCCESS,  expensesDetails: record });
      });
    } catch (e) {
      dispatch({ type: FAILED });
    }
  };
};

export const saveExpense = (name, date, description, amount, dismiss) => {
  return (dispatch) => {
    serviceSaveExpense(name, date, description, amount, dismiss)
  };
};

export const updateExpense = (
  id,
  name,
  date,
  description,
  amount,
  dismiss
) => {
  return (dispatch) => {
    const approved = dismiss;
    serviceUpdateExpense(id, name, date, description, amount, approved)
      .then((data) => {
        dispatch({ type: UPDATE, payload: data });
      })
      .catch((e) => {
        dispatch({ type: UPDATE_FAILED });
      });
  };
};

export const deleteExpense = (id, month, year) => {
  return (dispatch) => {
    serviceDeleteExpense(id).then((expenses) => {
      const { metadata: { id } } = expenses
      dispatch({ type: DELETE, deletedExpenseId: id  });
    });
  };
};
