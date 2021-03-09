import React from "react";
import { AppBar, Link, Toolbar, Typography } from "@material-ui/core";

const NavBar = (props) => {
//   const classes = useStyles();
  return (
    <AppBar>
      <Toolbar>
        <Typography>
          <Link href="/workout-plan" >Workout Plan</Link>
        </Typography>
        <Typography>
          <Link href="/meal-plan">Meal Plan</Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
