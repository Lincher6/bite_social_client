import React from 'react'
import { EditButton } from "features/common/EditButton";
import { Home } from "@material-ui/icons";
import { NavLink } from "react-router-dom";
import ForumIcon from '@material-ui/icons/Forum';
import { AddBite } from "features/Bites";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import { Notifications } from 'features/Notifications';
import { DialogsNavIcon } from 'features/Dialogs';

export const AuthenticatedNavigation = props => (
    <React.Fragment>
        <AddBite />
        <NavLink to={'/'}>
            <EditButton tip={'Главная'}>
                <Home />
            </EditButton>
        </NavLink>
        <NavLink to={'/dialogs'}>
            <DialogsNavIcon />
        </NavLink>
        <NavLink to={'/profile'}>
            <EditButton tip={'Пользователь'}>
                <AccountCircleIcon />
            </EditButton>
        </NavLink>
        <NavLink to={'/users'}>
            <EditButton tip={'Пользователи'}>
                <PeopleAltIcon />
            </EditButton>
        </NavLink>
        <Notifications />
    </React.Fragment>
)