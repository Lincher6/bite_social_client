import React, { useEffect } from 'react'
import { UsersList, SearchUsers } from 'features/Users'
import { useStyles } from './styles'
import { ErrorBoundary } from 'features/common'

export const UsersPage = (props) => {

    const classes = useStyles()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className={classes.grid}>
            <div className='list'>
                <ErrorBoundary>
                    <UsersList />
                </ErrorBoundary>
            </div>
            <div className='search'>
                <ErrorBoundary>
                    <SearchUsers />
                </ErrorBoundary>
            </div>
        </div>
    )
}