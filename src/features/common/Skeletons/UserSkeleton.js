import React, { Fragment } from 'react'
import noImg from '../../../ui/assets/no-avatar.png'
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { useStyles } from '../styles';
import { CircularProgress } from '@material-ui/core';

export const UserSkeleton = (props) => {
    const classes = useStyles()

    return (
        <Fragment>
            {
                Array.from({ length: 9 }).map((item, index) => {
                    return (
                        <Card className={classes.userSkeleton} key={index}>
                            <CardMedia
                                className='image'
                                image={noImg}
                            />

                            <div>
                                <div className="handle"></div>
                                <div className="location"></div>

                            </div>

                            <div className='actions'>
                                <div className="follow"></div>
                                <div className="send"></div>
                            </div>
                            <CircularProgress size={60} className='preloader' />
                        </Card >
                    )
                })
            }
        </Fragment>
    )
}