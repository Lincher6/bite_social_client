import React, { useCallback } from 'react'
import { useStyles } from '../styles';
import { profileActions } from "features/Profile";
import ExitToApp from "@material-ui/icons/ExitToApp";
import { useDispatch } from "react-redux";

export const Logout = ({ className, color }) => {
    const classes = useStyles()
    const dispatch = useDispatch()

    const logout = useCallback(() => {
        dispatch(profileActions.logout())
    }, [dispatch])

    return (
        <div onClick={logout} className='item'>
            <div>
                Выйти
            </div>
            <div>
                <ExitToApp color={color} />
            </div>
        </div>
    )
}