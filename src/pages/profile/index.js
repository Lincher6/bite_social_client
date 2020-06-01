import React from 'react'
import Grid from '@material-ui/core/Grid'
import { ProfileCard } from '../../features/Profile'
import { useSelector } from 'react-redux'
import { profileSelectors } from '../../features/Profile'
import { Redirect } from 'react-router-dom'

export const ProfilePage = (props) => {
    const authenticated = useSelector(profileSelectors.authenticated)

    if (!authenticated) {
        return <Redirect to='/login' />
    }


    return (
        <Grid container justify='center'>
            <Grid item md={8} xs={12}>
                <ProfileCard />
            </Grid>
        </Grid>
    )
}