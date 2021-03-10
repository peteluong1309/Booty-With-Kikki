import React from "react";
import { AppBar, Link, Toolbar, Typography } from "@material-ui/core";
import styles from './styles.module.scss'

const NavBar = (props) => {
//   const classes = useStyles();
  return (
    <AppBar className={styles.base}>
      <Toolbar className={styles.tyson_toolbar}>
        <Typography className={styles.tyson_text}>
          <Link className={styles.tyson_link} href="/workout-plan" >Workout Plan</Link>
        </Typography>
        <Typography className={styles.tyson_text}>
          <Link className={styles.tyson_link} href="/meal-plan">Meal Plan</Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
