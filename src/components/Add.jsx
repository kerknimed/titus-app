import { DatePicker, Select } from "antd";
import { CalendarOutlined } from "@ant-design/icons";

const { Option } = Select;

function AddExpense({
  setFieldValue,
  values,
  touched,
  errors,
  isSubmitting,
  handleChange,
  handleBlur,
  handleSubmit,
}) {
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
        suffixIcon={<CalendarOutlined className="calendar-icon" />}
        className="date-picker"
        bordered
      />
      {errors.date && touched.date && (
        <div className="input-feedback">{errors.date}</div>
      )}
      <input
        type="textarea"
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder="Description"
        style={{ display: 'block', width:'500px', border: '1px solid #ddd', borderRadius: '5px', padding: '5px', margin: '20px 0' }}
        name="description"
        value={values.description}
        rows="3"
      />
      {errors.description && touched.description && (
        <div className="input-feedback">{errors.description}</div>
      )}
      <input
        type="number"
        onBlur={handleBlur}
        onChange={handleChange}
        style={{ display: 'block', width:'500px', border: '1px solid #ddd', borderRadius: '5px', padding: '5px', margin: '20px 0' }}
        placeholder="Amount (Euro)"
        name="amount"
        value={values.amount}
      />
      {errors.amount && touched.amount && (
        <div className="input-feedback">{errors.amount}</div>
      )}
      <Select
        onBlur={handleBlur}
        className="selectapproved"
        placeholder="Approved?"
        onChange={(value) => setFieldValue("dismiss", value)}
      >
        <Option value="1">Yes</Option>
        <Option value="0">No</Option>
      </Select>
      {errors.dismiss && touched.dismiss && (
        <div className="input-feedback">{errors.dismiss}</div>
      )}
      <button
        type="submit"
        style={{ display: 'block' }}
        disabled={isSubmitting}
        className="custom-btn btn-6">
        Add Expense
      </button>
    </form>
  );
}

export default AddExpense;
