import React, { Fragment, useEffect } from 'react'
import { Grid } from '@material-ui/core'
import { UsersList, SearchUsers } from '../../features/Users'
import { useStyles } from './styles'

export const UsersPage = (props) => {

    const classes = useStyles()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className={classes.grid}>
            <div className='list'>
                <UsersList />
            </div>
            <div className='search'>
                <SearchUsers />
            </div>
        </div>
    )
}