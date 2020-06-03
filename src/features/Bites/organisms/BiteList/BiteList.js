import React, { useCallback, useEffect, useState } from 'react'
import { Bite } from "../Bite";
import { useStyles } from "../../styles";
import { useSelector, useDispatch } from "react-redux";
import { bitesSelectors, bitesActions } from "../../model";
import CircularProgress from "@material-ui/core/CircularProgress";
import { LoadMore } from '../../molecules/LoadMore';

export const BiteList = ({ userHandle = '' }) => {
    const [offset, setOffset] = useState(0)
    const classes = useStyles()
    const dispatch = useDispatch()
    const { bites, loadingBites } = useSelector(bitesSelectors.bitesData)

    useEffect(() => {
        return () => { dispatch(bitesActions.clearBites_AC()) }
    }, [])

    const getBites = useCallback(async () => {
        dispatch(bitesActions.getBites(offset, userHandle))
    }, [dispatch, offset, userHandle])

    useEffect(() => {
        getBites()
    }, [getBites])

    return (
        <div className={classes.list}>
            {bites.map(bite => {
                return (
                    <Bite
                        key={bite.biteId}
                        {...bite}
                    />
                )
            })}
            {loadingBites
                ? <CircularProgress size={80} />
                : <LoadMore offset={offset} setOffset={setOffset} />
            }
        </div>
    )
}