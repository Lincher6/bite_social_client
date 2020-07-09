import React, { useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import { ProfileCard } from '@features/Profile';
import { BiteList, Filter } from "@features/Bites";
import { MusicPlayer } from '../../features/Music';

export const HomePage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <Grid container spacing={2} direction='row-reverse'>
            <Grid item md={4} xs={12}>
                <MusicPlayer />
            </Grid>
            <Grid item md={8} xs={12}>
                <BiteList />
            </Grid>
        </Grid>

    )
}