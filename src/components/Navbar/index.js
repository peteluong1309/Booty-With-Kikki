import React from "react";
import {
  AppBar,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
} from "@material-ui/core";
import styles from "./styles.module.scss";
import { AccountCircle, HomeRounded, ShoppingCart } from "@material-ui/icons";

const navItem = [
  { value: "Workout Plan", path: "/workout-plan" },
  { value: "Meal Plan", path: "/meal-plan" },
  { value: "Contact", path: "/contact" },
  { value: "About", path: "/about" },
];

const NavBar = (props) => {
  //   const classes = useStyles();
  return (
    <AppBar className={styles.root}>
      <Toolbar className={styles.tyson_toolbar}>
        <IconButton className={styles.tyson_toolbar_icon}>
          <HomeRounded />
        </IconButton>
        <List className={styles.tyson_toolbar_list}>
          {navItem.map((item) => {
            return (
              <ListItem className={styles.listItemLink}>
                <a href={item.path} className={styles.listItemLink_item}>
                  <ListItemText
                    className={styles.listItemLink_item_text}
                    primary={item.value}
                  />
                </a>
              </ListItem>
            );
          })}
        </List>
        <IconButton>
          <ShoppingCart />          
        </IconButton>  
        <IconButton>
          <AccountCircle />          
        </IconButton>  
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
