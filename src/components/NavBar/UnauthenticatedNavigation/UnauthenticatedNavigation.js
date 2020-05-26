import React from 'react'
import Button from "@material-ui/core/Button";
import {NavLink} from "react-router-dom";

export const UnauthenticatedNavigation = props => (
    <React.Fragment>
        <Button color='inherit' component={NavLink} to={'/'}>
            Home
        </Button>
        <Button color='inherit' component={NavLink} to={'/login'}>
            Login
        </Button>
        <Button color='inherit' component={NavLink} to={'/signUp'}>
            SignUp
        </Button>
    </React.Fragment>
)