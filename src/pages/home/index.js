import React, { useCallback, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import { ProfileCard } from '../../features/Profile';
import { useDispatch, useSelector } from 'react-redux';
import { bitesActions, bitesSelectors } from '../../features/Bites';
import { BiteList } from "../../features/Bites";

export const HomePage = () => {
    const dispatch = useDispatch()
    const bites = useSelector(bitesSelectors.bites)

    const getBites = useCallback(async () => {
        dispatch(bitesActions.getBites())
    }, [dispatch])

    useEffect(() => {
        if (bites.length === 0) {
            getBites()
        }
    }, [getBites, bites])

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