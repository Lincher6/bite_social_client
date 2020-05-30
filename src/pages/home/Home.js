import React, { useCallback, useEffect, useMemo } from 'react'
import Grid from '@material-ui/core/Grid'
import { Profile } from '../../components/Profile';
import { useSelector, useDispatch } from 'react-redux';
import { bitesActions, bitesSelectors } from '../../model/bites';
import { userSelectors } from '../../model/user'
import { BiteList } from "../../components/Bites/BiteList";

export const Home = () => {
    const bites = useSelector(bitesSelectors.bites)
    const user = useSelector(userSelectors.user)
    const dispatch = useDispatch()

    useCallback(() => console.log('memo'))

    const getBites = useCallback(async () => {
        dispatch(bitesActions.getBites())
    }, [dispatch])

    useEffect(() => {
        getBites()
    }, [getBites])

    return (
        <Grid container spacing={4}>
            <Grid item md={8} xs={12}>
                <BiteList bites={bites} />
            </Grid>
            <Grid item md={4} xs={12}>
                <Profile {...user} />
            </Grid>

        </Grid>

    )
}