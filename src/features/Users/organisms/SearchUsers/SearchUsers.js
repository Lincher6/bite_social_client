import React, { useCallback } from 'react'
import { SearchUsersForm } from './SearchUsersForm'
import { useStyles } from "../../styles";
import { useDispatch } from 'react-redux';
import { usersActions } from '../../model';

export const SearchUsers = (props) => {
    const classes = useStyles()
    const dispatch = useDispatch()

    const setSearchParams = useCallback((searchParams) => {
        dispatch(usersActions.setSearchParams_AC(searchParams))
    }, [dispatch])

    return (
        <div className={classes.searchUsers} >
            <SearchUsersForm setSearchParams={setSearchParams} />
        </div>
    )
}