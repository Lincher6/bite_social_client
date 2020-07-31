import React, { useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import { BiteList } from 'features/Bites'
import { UserProfile } from 'features/Users'
import { profileSelectors } from 'features/Profile'
import { useParams, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { ErrorBoundary } from 'features/common'

export const UserPage = () => {
    const params = useParams()
    const userHandle = params.userHandle
    const { handle: profileHandle } = useSelector(profileSelectors.credentials)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    if (userHandle === profileHandle) {
        return <Redirect to='/profile' />
    }

    return (
        <Grid container justify='center'>
            <Grid item md={8} xs={12}>
                <ErrorBoundary>
                    <UserProfile userHandle={userHandle} />
                    <BiteList userHandle={userHandle} />
                </ErrorBoundary>
            </Grid>
        </Grid>
    )
}