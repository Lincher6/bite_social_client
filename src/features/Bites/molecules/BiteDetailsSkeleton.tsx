import React from 'react'
import noImg from 'ui/assets/no-avatar.png'
import classes from '../styles.module.scss'
import { Typography, CircularProgress } from '@material-ui/core'

export const BiteDetailsSkeleton = () => {

    return (
        <div className={classes.biteDeatilsSkeleton}>
            <div className={classes.imageWrapper}>
                <img src={noImg} alt='user' className={classes.image} />
            </div>
            <div className={classes.handle}></div>
            <div className={classes.date}></div>
            <div className={classes.body}></div>
            <div className={classes.body}></div>
            <div className={classes.halfBody}></div>
            <div className={classes.buttons}></div>
            <div className={classes.comments}>
                <Typography variant='h5' className={classes.title}>
                    Комментарии
                </Typography>
            </div>
            {<CircularProgress className={classes.preloader} size={80} />}
        </div>
    )
}