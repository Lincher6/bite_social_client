import React, { useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import { BiteList } from '../../features/Bites'
import { useParams, Redirect } from 'react-router-dom'
import { UserProfile } from '../../features/Users'
import { useSelector } from 'react-redux'
import { profileSelectors } from '../../features/Profile'

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
                <UserProfile userHandle={userHandle} />
                <BiteList userHandle={userHandle} />
            </Grid>
        </Grid>
    )
}