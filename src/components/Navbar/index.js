import React from 'react';
import { AppBar, Link, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    typography: {
        
    }
})

const NavBar = (props) => {

    return (
        <AppBar>
                <Toolbar>
                    <Typography>
                        <Link href='/workout-plan'>Workout Plan</Link>
                    </Typography>
                    <Typography>
                        <Link href='/meal-plan'>Meal Plan</Link>
                    </Typography>
                </Toolbar>
            </AppBar>
    );
}

export default NavBar;