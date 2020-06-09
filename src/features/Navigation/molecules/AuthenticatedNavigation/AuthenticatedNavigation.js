import React from 'react'
import { EditButton } from "../../../common/EditButton";
import { Home, Notifications } from "@material-ui/icons";
import { NavLink } from "react-router-dom";
import { Logout } from "../../../Authentication/organisms/Logout";
import { AddBite } from "../../../Bites";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';

export const AuthenticatedNavigation = props => (
    <React.Fragment>
        <AddBite />
        <NavLink to={'/'}>
            <EditButton tip={'Главная'}>
                <Home />
            </EditButton>
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
        <EditButton tip={'Уведомления'}>
            <Notifications />
        </EditButton>
        <Logout />

    </React.Fragment>
)