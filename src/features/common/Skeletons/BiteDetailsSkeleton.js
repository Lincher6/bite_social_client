import React, { Fragment } from 'react'
import noImg from '../../../ui/assets/no-avatar.png'
import { useStyles } from '../styles'
import { Typography, CircularProgress } from '@material-ui/core'

export const BiteDetailsSkeleton = (props) => {
    const classes = useStyles()

    return (
        <div className={classes.biteDeatilsSkeleton}>
            <div className='image-wrapper'>
                <img src={noImg} alt='user' className='image' />
            </div>
            <div className="handle"></div>
            <div className="date"></div>
            <div className="body"></div>
            <div className="body"></div>
            <div className="halfBody"></div>
            <div className='buttons'></div>
            <div className='comments'>
                <Typography variant='h5' className='title'>
                    Комментарии
                </Typography>
            </div>
            {<CircularProgress className='preloader' size={80} />}
        </div>
    )
}