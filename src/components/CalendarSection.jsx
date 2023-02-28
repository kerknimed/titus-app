import React from "react";
import Calendar from "./Calendar";
import { Switch, Route, Link } from "react-router-dom";

function CalendarSection() {
  return (
    <div>
      <div className="header-lg">
        <div className="header-title">
          <span style={{ marginLeft: "25px" }}>Expenses List </span>
        </div>
        <div style={{ display:"flex",  alignItems:"center" }}>
          <Switch>
            <Route path="/list">
              <Calendar />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default CalendarSection;
