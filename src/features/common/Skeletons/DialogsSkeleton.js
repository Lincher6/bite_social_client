import React, { Fragment } from 'react'
import noImg from 'ui/assets/no-avatar.png'
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { useStyles } from '../styles';
import { CircularProgress } from '@material-ui/core';

export const DialogsSkeleton = (props) => {
    const classes = useStyles()

    return (
        <Fragment>

            {
                Array.from({ length: 5 }).map((item, index) => {
                    return (
                        <Card className={classes.dialogsSkeleton} key={index}>
                            <CardMedia
                                className='image'
                                image={noImg}
                                title='User image'
                            />
                            <div className='container'></div>
                            {<CircularProgress className='preloader' />}
                        </Card>
                    )
                })
            }
        </Fragment>
    )
}