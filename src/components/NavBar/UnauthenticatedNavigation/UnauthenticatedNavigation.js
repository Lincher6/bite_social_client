import React from 'react'
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";

export const UnauthenticatedNavigation = props => (
    <React.Fragment>
        <Button component={NavLink} to={'/'}>
            Главная
        </Button>
        <Button component={NavLink} to={'/login'}>
            Войти
        </Button>
        <Button component={NavLink} to={'/signUp'}>
            Регистрация
        </Button>
    </React.Fragment>
)