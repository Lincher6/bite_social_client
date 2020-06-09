import React from 'react'
import Grid from '@material-ui/core/Grid'
import { Profile } from '../../features/Profile'
import { useSelector } from 'react-redux'
import { profileSelectors } from '../../features/Profile'
import { Redirect } from 'react-router-dom'
import { BiteList } from '../../features/Bites'

export const ProfilePage = () => {
    const authenticated = useSelector(profileSelectors.authenticated)
    const { handle } = useSelector(profileSelectors.credentials)
    const loadingProfile = useSelector(profileSelectors.loadingProfile)

    if (!authenticated) {
        return <Redirect to='/login' />
    }

    return (
        <Grid container justify='center'>
            <Grid item md={8} xs={12}>
                <Profile />
                {loadingProfile
                    ? null
                    : <BiteList userHandle={handle} />}
            </Grid>
        </Grid>
    )
}