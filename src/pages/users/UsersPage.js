import React, { useEffect } from 'react'
import { UsersList, SearchUsers } from 'features/Users'
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