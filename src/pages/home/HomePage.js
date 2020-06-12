import React from 'react'
import Grid from '@material-ui/core/Grid'
import { ProfileCard } from '../../features/Profile';
import { BiteList, Filter } from "../../features/Bites";

export const HomePage = () => {
    return (
        <Grid container spacing={4} direction='row-reverse'>
            <Grid item md={4} xs={12}>
                <ProfileCard />
            </Grid>
            <Grid item md={8} xs={12}>
                <BiteList />
            </Grid>
        </Grid>

    )
}