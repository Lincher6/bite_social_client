import React, { Fragment } from 'react'
import { Grid } from '@material-ui/core'
import { UsersList } from '../../features/Users'

export const UsersPage = (props) => {
    return (
        <Grid container spacing={4} direction='row-reverse'>
            <Grid item sm={4} xs={12}>
                <Fragment>xxx</Fragment>
            </Grid>
            <Grid item sm={8} xs={12}>
                <UsersList />
            </Grid>
        </Grid>
    )
}