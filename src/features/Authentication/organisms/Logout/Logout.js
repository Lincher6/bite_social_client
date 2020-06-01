import React, { useCallback } from 'react'
import { profileActions } from "../../../Profile";
import ExitToApp from "@material-ui/icons/ExitToApp";
import { EditButton } from "../../../common";
import { useDispatch } from "react-redux";

export const Logout = ({ className, color }) => {
    const dispatch = useDispatch()

    const logout = useCallback(() => {
        dispatch(profileActions.logout())
    }, [dispatch])

    return (
        <EditButton className={className} tip='Выйти' onClick={logout} >
            <ExitToApp color={color} className='icon' />
        </EditButton>
    )
}