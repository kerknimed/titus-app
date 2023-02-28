import React, { useState, useEffect } from 'react';
import {
  useDispatch,
} from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import { Alert } from 'antd';
import { Formik } from 'formik';
import * as Yup from 'yup';
import moment from 'moment';
import {
  updateExpense,
  saveExpense,
} from '../actions';

import Edit from '../components/Edit';
import Add from '../components/Add';

function Expense() {
  const location = useLocation();
  const history = useHistory();
  const id = new URLSearchParams(location.search).get('edit');
  const view = new URLSearchParams(location.search).get('view');
  const isEditMode = !!id;
  const isViewMode = !!view;
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    description: '',
    amount: '',
    dismiss: '',
  });

  const [addedAlert, setAddedAlert] = useState(false);
  const [editedAlert, setEditedAlert] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const setAlert = setTimeout(() => {
      setAddedAlert(false);
      setEditedAlert(false);
    }, 10000);
    return () => {
      clearTimeout(setAlert);
    };
  }, [addedAlert, editedAlert]);

  if (location.search) {
    return (
      <div className='expense'>
        <div className='form-container'>
          <div>
            <Formik
              initialValues={formData}
              onSubmit={(values, { setSubmitting }) => {
                console.log('submitted');
                const { name, date, description, amount, dismiss } = values;
                const formattedDate = date.format('YYYY-MM-DD');
                dispatch(
                  updateExpense(
                    id,
                    name,
                    date,
                    description,
                    amount,
                    dismiss
                  )
                );
                setEditedAlert(true);
                setSubmitting(false);
              }}
              validationSchema={Yup.object().shape({
                name: Yup.string().required(
                  "* This field can't be empty!"
                ),
                date: Yup.string()
                  .required("* Can't be empty!")
                  .nullable(),
                description: Yup.string()
                  .required("* Can't be empty!")
                  .min(50, '* Minimum 50 characters'),
                amount: Yup.string().required("* Can't be empty!"),
                dismiss: Yup.string().required(
                  "* This field can't be empty!"
                ),
              })}
            >
              {(props) => {
                const {
                  values,
                  touched,
                  errors,
                  isSubmitting,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  setFieldValue,
                } = props;
                return (
                  <>
                    {editedAlert && (
                      <Alert
                        message='Edited Successfully!'
                        type='info'
                      />
                    )}
                    <br />
                    <Edit
                      setFieldValue={setFieldValue}
                      values={values}
                      touched={touched}
                      errors={errors}
                      isSubmitting={isSubmitting}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      handleSubmit={handleSubmit}
                    />
                  </>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className='expense'>
        <div className='form-container'>
          <div>
            <Formik
              initialValues={formData}
              onSubmit={(values, { setSubmitting }) => {
                const { name, date, description, amount, dismiss } = values;
                const formattedDate = date.format('YYYY-MM-DD');
                dispatch(
                  saveExpense(
                    name,
                    formattedDate,
                    description,
                    amount,
                    dismiss
                  )
                );
                setAddedAlert(true);
                setSubmitting(false);
              }}
              validationSchema={Yup.object().shape({
                name: Yup.string().required(
                  "* This field can't be empty!"
                ),
                date: Yup.string().required(
                  "* This field can't be empty!"
                ),
                description: Yup.string()
                  .required("* This field can't be empty!")
                  .min(50, '* 50 characters minimum!'),
                amount: Yup.string().required("* Amount can't be empty!"),
                dismiss: Yup.string().required(
                  "* This field can't be empty!"
                ),
              })}
            >
              {(props) => {
                const {
                  values,
                  touched,
                  errors,
                  isSubmitting,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  setFieldValue,
                  setTouched,
                } = props;
                return (
                  <>
                    {addedAlert && (
                      <Alert
                        message='Added to your Database!'
                        type='success'
                      />
                    )}
                    <br />
                    <Add
                      setFieldValue={setFieldValue}
                      values={values}
                      touched={touched}
                      errors={errors}
                      isSubmitting={isSubmitting}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      handleSubmit={handleSubmit}
                      setTouched={setTouched}
                    />
                  </>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
    );
  }
}

export default Expense;
