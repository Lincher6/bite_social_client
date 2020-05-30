import React from 'react'
import { useStyles } from "../styles";
import Paper from '@material-ui/core/Paper';
import { NavLink } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { Button } from "../../common/styled-components";

export const NoProfile = props => {
    const classes = useStyles()

    return (
        <Paper className='paper'>
            <div className={classes.noProfile}>
                <Typography variant='body1'>Пользователь не найден</Typography>
                <Button
                    className='buttons'
                    variant='contained'
                    color='primary'
                    component={NavLink}
                    to='/login'>
                    Войти
            </Button>
                <Button
                    className='buttons'
                    variant='contained'
                    color='secondary'
                    component={NavLink}
                    to='/signUp'>
                    Регистрация
            </Button>
            </div>
        </Paper >
    )
}