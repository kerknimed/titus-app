import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import UnpublishedIcon from '@mui/icons-material/Unpublished';

import { Link } from "react-router-dom";
import { deleteExpense } from "../actions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function ExpenseItem({ name, date, amount, approval, id, year, month, day }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteExpense(id, month, year));
  };
  return (
    <div className="expense-item-container">
      <div className="expense-item-header">
        <div style={{ textAlign: 'center' }}>
          <div className="expense-item-name">{name}</div>
          <div className="expense-item-date">{date}</div>
        </div>
      </div>
      <div className="expense-approval">
        {approval === 1 ? (
          <div>
            <TaskAltIcon style={{ color: 'rgb(1 39 225)' }}/>
            </div>

        ) : (
          <div>
            <UnpublishedIcon style={{ color: '#f00' }}/>
            </div>
        )}
        <div className="expense-item-amount">
          <span>{amount}</span>
        </div>
        <div className="expense-item-actions">
          <div className="expense-item-edit-container">
            <Link to={`/expense?edit=${id}`}>
              <ModeEditOutlineIcon className="expense-item-edit-logo" />
            </Link>
          </div>
          <div className="expense-item-delete-container">
            <DeleteIcon
              onClick={handleDelete}
              className="expense-item-delete-logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
