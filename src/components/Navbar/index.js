import React, { useState } from "react";
import {
  AppBar,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  withStyles,
} from "@material-ui/core";
import styles from "./styles.module.scss";
import { AccountCircle, HomeRounded, ShoppingCart } from "@material-ui/icons";
import { Link } from "react-router-dom";

const navItem = [
  { value: "Workout Plan", path: "/workout-plan" },
  { value: "Meal Plan", path: "/meal-plan" },
  { value: "Contact", path: "/contact" },
  { value: "About", path: "/about" },
];

const  StyleMenuContainer = withStyles({
  paper: {
    top: '60px !important',
  }
})(Menu)

const NavBar = (props) => {
  //   const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (e) => {
    setAnchorEl(e.target)
  }
  
  const handleClose = () => {
    setAnchorEl(null)
  }

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
                <Link to={item.path} className={styles.listItemLink_item}>
                  <ListItemText
                    className={styles.listItemLink_item_text}
                    primary={item.value}
                  />
                </Link>
              </ListItem>
            );
          })}
        </List>
        <List className={styles.tyson_toolbar_list}>
          <ListItem className={styles.listItemLink}>
            <IconButton>
              <ShoppingCart />
            </IconButton>
          </ListItem>
          <ListItem className={styles.listItemLink}>
            <IconButton onClick={handleClick}>
              <AccountCircle />
            </IconButton>
            
            {/* menu */}
            <StyleMenuContainer anchorEl={anchorEl} open={Boolean(anchorEl)}
        onClose={handleClose}>
              <MenuItem>Sign in</MenuItem>
              <MenuItem>Sign up</MenuItem>
            </StyleMenuContainer>
          </ListItem>
        </List>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
