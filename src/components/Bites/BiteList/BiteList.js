import React from 'react'
import { Bite } from "../Bite";
import { useStyles } from "../styles";
import { useSelector } from "react-redux";
import { bitesSelectors } from "../../../model/bites";
import CircularProgress from "@material-ui/core/CircularProgress";

export const BiteList = ({ bites }) => {
    const classes = useStyles()
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