import React, { Fragment } from 'react'
import noImg from 'ui/assets/no-avatar.png'
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { useStyles } from '../styles';
import { CircularProgress } from '@material-ui/core';

export const BiteSkeleton = (props) => {
    const classes = useStyles()

    return (
        <Fragment>

            {
                Array.from({ length: 5 }).map((item, index) => {
                    return (
                        <Card className={classes.biteSkeleton} key={index}>
                            <CardMedia
                                className='image'
                                image={noImg}
                                title='User image'
                            />
                            <div className='content'>
                                <div className="handle"></div>
                                <div className="date" ></div>
                                <div className="body" ></div>
                                <div className="body" ></div>
                                <div className="halfBody" />
                                <div className="actionsLine"></div>
                            </div>
                            {<CircularProgress className='preloader' size={80} />}
                        </Card>
                    )
                })
            }
        </Fragment>
    )
}