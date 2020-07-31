import React, { useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import { Profile, profileSelectors } from 'features/Profile'
import { BiteList } from 'features/Bites'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { ErrorBoundary } from 'features/common'

export const ProfilePage = () => {
    const authenticated = useSelector(profileSelectors.authenticated)
    const { handle } = useSelector(profileSelectors.credentials)
    const loadingProfile = useSelector(profileSelectors.loadingProfile)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    if (!authenticated) {
        return <Redirect to='/login' />
    }

    return (
        <Grid container justify='center'>
            <Grid item md={8} xs={12}>
                <ErrorBoundary>
                    <Profile />
                    {
                        loadingProfile
                            ? null
                            : <BiteList userHandle={handle} />
                    }
                </ErrorBoundary>
            </Grid>
        </Grid>
    )
}
