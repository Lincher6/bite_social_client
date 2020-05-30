import React, { useCallback } from 'react'
import { userActions } from "../../../model/user";
import ExitToApp from "@material-ui/icons/ExitToApp";
import { EditButton } from "../../common/EditButton";
import { useDispatch } from "react-redux";

export const Logout = ({ className, color }) => {
    const dispatch = useDispatch()

    const logout = useCallback(() => {
        dispatch(userActions.logout())
    }, [dispatch])

    return (
        <EditButton className={className} tip='Выйти' onClick={logout} >
            <ExitToApp color={color} className='icon' />
        </EditButton>
    )
}