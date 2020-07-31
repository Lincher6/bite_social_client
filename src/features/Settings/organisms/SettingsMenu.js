import React, { Fragment } from 'react'
import { useStyles } from '../styles';
import { MenuItem, Menu, Typography } from '@material-ui/core'
import InfoIcon from '@material-ui/icons/Info';
import PersonIcon from '@material-ui/icons/Person';
import Lock from '@material-ui/icons/Lock';
import LibraryBooks from '@material-ui/icons/LibraryBooks';
import { Logout } from '../molecules/Logout';
import { useSelector } from 'react-redux';
import { profileSelectors } from 'features/Profile';
import { Option } from '../molecules/Option';

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
                <Option Icon={InfoIcon} link={'/contactss'} title={'Контакты'} />
            </MenuItem>

            {
                authenticated &&
                <MenuItem onClick={handleClose} >
                    <Option Icon={PersonIcon} link={'/profile'} title={'Профиль'} />
                </MenuItem>
            }

            {
                authenticated &&
                <MenuItem onClick={handleClose} >
                    <Logout />
                </MenuItem>
            }

            {
                !authenticated &&
                <MenuItem onClick={handleClose} >
                    <Option Icon={Lock} link={'/login'} title={'Войти'} />
                </MenuItem>
            }

            {
                !authenticated &&
                <MenuItem onClick={handleClose} >
                    <Option Icon={LibraryBooks} link={'/signUp'} title={'Регистрация'} />
                </MenuItem>
            }

        </Menu>
    )
}