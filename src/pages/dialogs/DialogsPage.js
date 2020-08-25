import React, { useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import { ErrorBoundary } from 'features/common';
import { profileSelectors } from 'features/Profile'
import { DialogList, MessageList, AddMessage } from 'features/Dialogs';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

export const DialogsPage = () => {
    const authenticated = useSelector(profileSelectors.authenticated)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    if (!authenticated) {
        return <Redirect to='/login' />
    }

    return (
        <Grid container>
            <Grid item md={3} xs={12}>
                <ErrorBoundary>
                    <DialogList />
                </ErrorBoundary>
            </Grid>
            <Grid item md={9} xs={12}>
                <ErrorBoundary>
                    <MessageList />
                    <AddMessage />
                </ErrorBoundary>
            </Grid>
        </Grid>

    )
}