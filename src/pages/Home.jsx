import React from "react";
import { Link } from "react-router-dom";
import Counter from "../components/counter"

function Home() {
  return (
    <div className="home">
      <div className="home-box">
        <div className="font-weight-bold lead home-title pb-3">
          Manage your Expenses Easily with Titus Ltd
        </div>
        <p style={{color:"white"}}>we are providing easiest way to manage expenses, Get a full view so you know where to save.</p>
        <div>
          <Link to="/list">
            <button className="custom-btn btn-6"><span>Get Started</span></button>
          </Link>
        </div>
        <div style={{ marginTop: '20px' }}>
          <Counter />
        </div>
      </div>
    </div>
  );
}

export default Home;
