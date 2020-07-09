import React from 'react'
import AppBar from "@material-ui/core/AppBar";
import { useStyles } from '../styles'
import Toolbar from "@material-ui/core/Toolbar";
import { UnauthenticatedNavigation } from "../molecules/UnauthenticatedNavigation";
import { useSelector } from "react-redux";
import { profileSelectors } from "../../Profile";
import { AuthenticatedNavigation } from "../molecules/AuthenticatedNavigation";

export const NavBar = props => {
    const classes = useStyles()
    const { authenticated } = useSelector(profileSelectors.profile)

    return (
        <AppBar position="fixed" style={{ backgroundColor: 'var(--darkNav)' }}>
            <Toolbar className={classes.navContainer}>
                {authenticated
                    ? <AuthenticatedNavigation />
                    : <UnauthenticatedNavigation />}
            </Toolbar>
        </AppBar>
    )
}