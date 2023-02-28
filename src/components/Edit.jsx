import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DatePicker, Select } from "antd";
import { CalendarOutlined } from "@ant-design/icons";

import { fetchExpenseById } from "../actions";
import { expensesSelector, expensesDetailsSelector } from "../selectors";

import moment from "moment";

const { Option } = Select;

function EditExpense({
  setFieldValue,
  values,
  touched,
  errors,
  isSubmitting,
  handleChange,
  handleBlur,
  handleSubmit,
}) {
  const location = useLocation();
  const id = new URLSearchParams(location.search).get("edit");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchExpenseById(id));
  }, [dispatch, id]);

  const expense_user = useSelector(expensesDetailsSelector);

  useEffect(() => {
    if (expense_user.length) {
      const fields = ["name", "date", "description", "amount", "dismiss"];
      fields.map((item, index) => {
        if (index === 1) {
          setFieldValue(item, moment(expense_user[0][item]));
        } else if (index === 4) {
          const approvedValue = expense_user[0]["approved"] === 1 ? "1" : "0";
          setFieldValue(item, approvedValue);
        } else {
          setFieldValue(item, expense_user[0][item]);
        }
        return item;
      });
    }
  }, [expense_user, setFieldValue]);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        style={{ display: 'block', width:'500px', border: '1px solid #ddd', borderRadius: '5px', padding: '5px' }}
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder="Name Claimer"
        name="name"
        className={
          errors.name && touched.name ? "text-input error" : "text-input"
        }
        value={values.name}
      />
      {errors.name && touched.name && (
        <div className="input-feedback">{errors.name}</div>
      )}
      <DatePicker
        onBlur={handleBlur}
        onChange={(date) => {
          setFieldValue("date", date);
        }}
        placeholder="Date of the expense"
        name="date"
        value={values.date}
        bordered
        suffixIcon={<CalendarOutlined className="calendar-icon" />}
        className="date-picker"
      />
      {errors.date && touched.date && (
        <div className="input-feedback">{errors.date}</div>
      )}
      <input
        onChange={handleChange}
        style={{ display: 'block', width:'500px', border: '1px solid #ddd', borderRadius: '5px', padding: '5px', margin: '20px 0' }}
        onBlur={handleBlur}
        type="textarea"
        placeholder="Description"
        value={values.description}
        name="description"
        rows="3"
      />
      {errors.description && touched.description && (
        <div className="input-feedback">{errors.description}</div>
      )}
      <input
        onChange={handleChange}
        onBlur={handleBlur}
        type="number"
        style={{ display: 'block', width:'500px', border: '1px solid #ddd', borderRadius: '5px', padding: '5px', margin: '20px 0' }}
        name="amount"
        value={values.amount}
        placeholder="Amount In Euro"
        // icon="euro-sign"
      />
      {errors.amount && touched.amount && (
        <div className="input-feedback">{errors.amount}</div>
      )}
      <Select
        onBlur={handleBlur}
        className="selectapproved"
        placeholder="Approved?"
        value={values.dismiss}
        onChange={(value) => setFieldValue("dismiss", value)}
      >
        <Option value="1">Yes</Option>
        <Option value="0">No</Option>
      </Select>
      {errors.dismiss && touched.dismiss && (
        <div className="input-feedback">{errors.dismiss}</div>
      )}
      <button
        style={{ display: 'block' }}
        disabled={isSubmitting}
        type="submit"
        placeholder=""
        className="custom-btn btn-6">
        Edit Expense
      </button>
    </form>
  );
}

export default EditExpense;
