import React, { useEffect, useState } from 'react'
import { Bite } from "./Bite";
import { useStyles } from "../styles";
import { useSelector, useDispatch } from "react-redux";
import { bitesSelectors, bitesActions } from "../model";
import { LoadMore } from 'features/common/LoadMore';
import { BiteSkeleton } from 'features/common';

export const BiteList = ({ userHandle = '' }) => {
    const [offset, setOffset] = useState(0)
    const classes = useStyles()
    const dispatch = useDispatch()
    const { bites, loadingBites, haveMoreBites } = useSelector(bitesSelectors.bitesData)

    useEffect(() => {
        if (offset !== 0) {
            dispatch(bitesActions.getBites(offset, userHandle))
        }
    }, [offset])

    useEffect(() => {
        dispatch(bitesActions.clearBites_AC())
        setOffset(0)
        dispatch(bitesActions.getBites(offset, userHandle))
    }, [userHandle])

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
                ? <BiteSkeleton />
                : <LoadMore offset={offset} setOffset={setOffset} haveMore={haveMoreBites} />
            }
        </div>
    )
}