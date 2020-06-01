import React from 'react'
import { EditButton } from "../../../common/EditButton";
import { Home, Notifications, Person } from "@material-ui/icons";
import { NavLink } from "react-router-dom";
import { Logout } from "../../../Authentication/organisms/Logout";
import { AddBite } from "../../../Bites";

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
                <Person />
            </EditButton>
        </NavLink>
        <EditButton tip={'Уведомления'}>
            <Notifications />
        </EditButton>
        <Logout />

    </React.Fragment>
)