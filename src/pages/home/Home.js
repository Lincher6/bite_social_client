import React, {useCallback, useEffect, useState} from 'react'
import Grid from '@material-ui/core/Grid'
import {BiteCard} from "../../components/BiteCard/BiteCard";
import { Profile } from '../../components/Profile/Profile';
import { useSelector, useDispatch } from 'react-redux';
import { dataActions, dataSelectors } from '../../model/data';
import { uiSelectors } from '../../model/ui'
import { userSelectors } from '../../model/user'

export const Home = (props) => {
    const bites = useSelector(dataSelectors.bites)
    const user = useSelector(userSelectors.user)
    const { loading } = useSelector(uiSelectors.ui)
    const dispatch = useDispatch()

    const getBites = useCallback(async () => {
        dispatch(dataActions.getBites())
    }, [])

    useEffect(() => {
        getBites()
    }, [getBites])

    const recentBites = loading
        ? <p>Loading</p>
        : bites.map(bite => <BiteCard key={bite.biteId} {...bite}/>)

    return (
        <Grid container spacing={4}>
            <Grid item sm={8} xs={12}>
                {recentBites}
            </Grid>
            <Grid item sm={4} xs={12}>
                <Profile {...user} />
            </Grid>

        </Grid>

    )
}