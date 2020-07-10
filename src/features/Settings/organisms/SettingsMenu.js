import React from 'react'
import { useStyles } from '../styles';
import { MenuItem, Menu, Typography } from '@material-ui/core'
import InfoIcon from '@material-ui/icons/Info';
import { Logout } from '../molecules/Logout';
import { useSelector } from 'react-redux';
import { profileSelectors } from 'features/Profile';
import { Contacts } from '../molecules/Contacts';

export const SettingsMenu = ({ anchorEl, handleClose }) => {
    const classes = useStyles()
    const authenticated = useSelector(profileSelectors.authenticated)

    return (
        <Menu
            id="simple-menu"
            className={classes.menu}
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            draggable={true}
        >
            <MenuItem onClick={handleClose} >
                <Contacts />
            </MenuItem>
            <MenuItem onClick={handleClose} >
                <Contacts />
            </MenuItem>
            <MenuItem onClick={handleClose} >
                <Contacts />
            </MenuItem>
            {
                authenticated &&
                <MenuItem onClick={handleClose} >
                    <Logout />
                </MenuItem>
            }
        </Menu>
    )
}