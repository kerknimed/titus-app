import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import { fetchInitialExpenses, fetchExpenseById } from '../actions';
import {
  initialExpensesSelector,
  expensesDetailsSelector,
  isLoadingSelector,
} from '../selectors';
import CalendarSection from '../components/CalendarSection';
import ExpenseItem from '../components/SingleCard';

function List() {
  const initialExpenses = useSelector(initialExpensesSelector);
  const expensesDetails = useSelector(expensesDetailsSelector);
  const isLoading = useSelector(isLoadingSelector);
  const dispatch = useDispatch();
  const expensesCount = expensesDetails && expensesDetails.length;

  useEffect(() => {
    dispatch(fetchInitialExpenses());
  }, []);

  useEffect(() => {
    if (initialExpenses) {
      initialExpenses.forEach((initialExpense) => {
        debugger
        const { record: expenseId } = initialExpense;
        dispatch(fetchExpenseById(expenseId));
      });
    }
  }, [initialExpenses]);

  return (
    <div className='list-expenses'>
      <CalendarSection />
      <div>
        {expensesCount ? (
          <div
            style={{
              display: 'flex',
              alignItems: 'space-between',
              flexWrap: 'wrap',
            }}
          >
            {expensesDetails.map(
              ({ id, name, date, approved, amount }, index) => {
                const formattedDate = moment(date).format('DD MMMM YYYY');
                const formattedAmount = amount + '€';
                return (
                  <ExpenseItem
                    key={`id_${id}_${index}`}
                    id={id}
                    name={name}
                    amount={formattedAmount}
                    approval={approved}
                    date={formattedDate}
                    isLoading={isLoading}
                  />
                );
              }
            )}
          </div>
        ) : (
          <div className='empty-ecpenses'>
            {isLoading ? (
              <span>Loading Data, Please Wait...</span>
            ) : (
              <span>No expenses yet</span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default List;
