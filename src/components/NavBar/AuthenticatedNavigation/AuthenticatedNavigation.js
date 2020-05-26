import React from 'react'
import {EditButton} from "../../common/EditButton";
import { Add, Home, Notifications } from "@material-ui/icons";
import {NavLink} from "react-router-dom";
import { Logout } from "../../Authentication/Logout";
import {AddBite} from "../../Bites/AddBite";

export const AuthenticatedNavigation = props => (
    <React.Fragment>
        <AddBite/>
        <NavLink to={''}>
            <EditButton tip={'Главная'}>
                <Home/>
            </EditButton>
        </NavLink>
        <EditButton tip={'Уведомления'}>
            <Notifications/>
        </EditButton>
        <Logout/>

    </React.Fragment>
)