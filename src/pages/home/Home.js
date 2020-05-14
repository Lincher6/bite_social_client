import React, {useCallback, useEffect, useState} from 'react'
import Grid from '@material-ui/core/Grid'
import {homeApi} from "../../api/homeApi";
import {BiteCard} from "../../components/BiteCard/BiteCard";

export const Home = (props) => {
    const [loading, setLoading] = useState(false)
    const [bites, setBites] = useState([])

    const getBites = useCallback(async () => {
        setLoading(true)
        const bitesData = await homeApi.getBites()
        if (bitesData.status === 200) {
            setBites(bitesData.data)
        }
        setLoading(false)
    }, [])

    useEffect(() => {
        getBites()
    }, [getBites])

    const recentBites = loading
        ? <p>Loading</p>
        : bites.map(bite => <BiteCard key={bite.biteId} {...bite}/>)

    return (
        <Grid container spacing={8}>
            <Grid item sm={8} xs={12}>
                {recentBites}
            </Grid>
            <Grid item sm={4} xs={12}>
                profile...
            </Grid>

        </Grid>

    )
}