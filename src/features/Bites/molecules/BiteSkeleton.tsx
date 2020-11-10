import React, { Fragment } from 'react'
import noImg from 'ui/assets/no-avatar.png'
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import classes from '../styles.module.scss'
import { CircularProgress } from '@material-ui/core';

export const BiteSkeleton = () => {
    return (
        <Fragment>

            {
                Array.from({ length: 5 }).map((item, index) => {
                    return (
                        <Card className={classes.biteSkeleton} key={index}>
                            <CardMedia
                                className={classes.image}
                                image={noImg}
                                title='User image'
                            />
                            <div className={classes.content}>
                                <div className={classes.handle}></div>
                                <div className={classes.date} ></div>
                                <div className={classes.body} ></div>
                                <div className={classes.body} ></div>
                                <div className={classes.halfBody} />
                                <div className={classes.actionsLine}></div>
                            </div>
                            {<CircularProgress className={classes.preloader} size={80} />}
                        </Card>
                    )
                })
            }
        </Fragment>
    )
}