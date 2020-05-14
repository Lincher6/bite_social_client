import React from 'react'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";

export const NavBar = props => (
    <AppBar position="fixed">
        <Toolbar className='nav-container'>
            <Button color='inherit' component={NavLink} to={'/'}>
                Home
            </Button>
            <Button color='inherit' component={NavLink} to={'/login'}>
                Login
            </Button>
            <Button color='inherit' component={NavLink} to={'/signUp'}>
                SignUp
            </Button>
        </Toolbar>
    </AppBar>
)