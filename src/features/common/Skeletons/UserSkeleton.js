import React, { Fragment } from 'react'
import noImg from '../../../assets/no-avatar.png'
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { useStyles } from '../styles';
import { CircularProgress } from '@material-ui/core';

export const UserSkeleton = (props) => {
    const classes = useStyles()

    return (
        <Fragment>
            {
                Array.from({ length: 5 }).map((item, index) => {
                    return (
                        <Fragment key={index}>
                            <Card className={classes.userSkeleton} key={index}>
                                <div className="card">
                                    <CardMedia
                                        className='image'
                                        image={noImg}
                                        title='User image'
                                    />
                                    <div className='content'>
                                        <div className='title'>
                                            <div className="handle"></div>
                                            <div className="location"></div>
                                        </div>
                                        <hr />
                                        <div className='body'></div>
                                        <div className='body'></div>
                                    </div>
                                    {<CircularProgress className='preloader' size={80} />}
                                </div>

                                <div className='actions'>
                                    <div className="follow"></div>
                                    <div className="send"></div>
                                </div>
                            </Card>
                        </Fragment>
                    )
                })
            }
        </Fragment>
    )
}