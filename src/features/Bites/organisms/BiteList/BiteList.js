import React from 'react'
import { Bite } from "../Bite";
import { useStyles } from "../../styles";
import { useSelector } from "react-redux";
import { bitesSelectors } from "../../model";
import CircularProgress from "@material-ui/core/CircularProgress";

export const BiteList = props => {
    const classes = useStyles()
    const bites = useSelector(bitesSelectors.bites)
    const loadingBites = useSelector(bitesSelectors.loadingBites)

    return (
        <div className={classes.list}>
            {loadingBites ? <CircularProgress size={80} /> : null}
            {bites.map(bite => {
                return (
                    <Bite
                        key={bite.biteId}
                        {...bite}
                    />
                )
            })}
        </div>
    )
}