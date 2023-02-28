import React from "react";
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';

function Header() {
  return (
    <>
      <header className="main-header">
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{alignItems:"center"}}>
        <Grid item xs={3}>
          <Link to="/">
          <h1 style={{color: "#872578"}}><span style={{color: "#872578"}}>Ti</span>Tus <span style={{color: "#872578"}}>Ltd</span></h1>        
          </Link>
        </Grid>
        <Grid item xs={2}>
        <Link to="/list">
          <h3>Home</h3>
        </Link>        
        </Grid>
        <Grid item xs={3}>
        <Link
            to="/expense">
              <h3>Add Expense</h3>
          </Link>        
          </Grid>
        <Grid item xs={3}>
        <Link
            to="/">
              <h3>About</h3>
          </Link>
        </Grid>
      </Grid>
      </header>
    </>
  );
}

export default Header;
