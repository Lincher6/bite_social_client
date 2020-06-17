import React, { Fragment, useEffect } from 'react'
import { Grid } from '@material-ui/core'
import { UsersList, SearchUsers } from '../../features/Users'

export const UsersPage = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <Grid container direction='row-reverse'>
            <Grid item sm={4} xs={12}>
                <SearchUsers />
            </Grid>
            <Grid item sm={8} xs={12}>
                <UsersList />
            </Grid>
        </Grid>
    )
}