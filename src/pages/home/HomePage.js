import React, { useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import { BiteList } from "features/Bites";
import { MusicPlayer } from 'features/Music';
import { ErrorBoundary } from 'features/common';

export const HomePage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <Grid container spacing={2} direction='row-reverse'>
            <Grid item md={4} xs={12}>
                <ErrorBoundary>
                    <MusicPlayer />
                </ErrorBoundary>
            </Grid>
            <Grid item md={8} xs={12}>
                <ErrorBoundary>
                    <BiteList />
                </ErrorBoundary>
            </Grid>
        </Grid>

    )
}