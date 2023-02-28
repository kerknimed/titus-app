import React, { useState, useEffect } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { useDispatch } from "react-redux";

import moment from "moment";
import CustomInput from "./CustomInput";

import { useLocation, useHistory } from "react-router-dom";

function Calendar() {
  const [date, setDate] = useState(undefined);
  const [isClicked, setIsClicked] = useState(false);

  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  const handleChange = (date) => {
    if (location.search) {
      history.push("/list");
    }
    setDate(date);
  };

  const handleCalendarOpen = () => {
    setIsClicked(true);
  };

  const handleCalendarClose = () => {
    setIsClicked(false);
  };

  useEffect(() => {
    if (location.search) {
      const date = new URLSearchParams(location.search).get("date");
      const formattedDate = new Date(date);
      setDate(formattedDate);
    }
  }, []);

  return (
    <div>
      <DatePicker
        selected={date}
        onChange={(date) => handleChange(date)}
        dateFormat="MMMM - yyyy"
        customInput={<CustomInput isClicked={isClicked} />}
        showMonthYearPicker
        showFullMonthYearPicker
        showPopperArrow={false}
        onCalendarClose={handleCalendarClose}
        onCalendarOpen={handleCalendarOpen}
        popperModifiers={{
          offset: {
            enabled: true,
            offset: "-95px, 0px",
          },
        }}
      ></DatePicker>
    </div>
  );
}

export default Calendar;
