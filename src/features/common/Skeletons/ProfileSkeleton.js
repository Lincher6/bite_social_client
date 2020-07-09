import React from 'react'
import { Paper } from '@material-ui/core'
import noImg from '../../../ui/assets/no-avatar.png'
import { useStyles } from '../styles';
import { CircularProgress } from '@material-ui/core';

export const ProfileSkeleton = (props) => {
    const classes = useStyles()

    return (
        <div className={classes.profileSkeleton}>
            <div className="album"></div>
            <div className="content">
                <div>
                    <img src={noImg} alt="noImg" className='image' />
                </div>
                <div className="handle"></div>
                <div className="bio"></div>
                <div className="bio"></div>
                <div className="location"></div>
                <div className="website"></div>
                <div className="edit"></div>
            </div>
            <div className="friends"></div>
            <CircularProgress size={80} className='preloader' />
        </div>
    )
}