import React from 'react'
import { Paper } from '@material-ui/core'
import noImg from '../../../assets/no-avatar.png'
import { useStyles } from '../styles';
import { CircularProgress } from '@material-ui/core';

export const ProfileCardSkeleton = (props) => {
    const classes = useStyles()

    return (
        <Paper className={classes.profileCardSkeleton}>
            <div>
                <img src={noImg} alt="noImg" className='image' />
            </div>
            <div className="handle"></div>
            <div className="bio"></div>
            <div className="bio"></div>
            <div className="location"></div>
            <div className="website"></div>
            <div className="edit"></div>
            <CircularProgress size={80} className='preloader' />
        </Paper>
    )
}