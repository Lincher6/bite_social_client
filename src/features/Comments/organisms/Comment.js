import React, { Fragment } from 'react'
import { Grid, Typography } from '@material-ui/core'
import classes from '../styles.module.scss'
import { useDayjs } from 'lib/hooks/useDayjs'
import { IsOnline } from 'features/common'

export const Comment = ({ userHandle, userImage, body, createdAt }) => {
    //const classes = useStyles()
    const { dayjs } = useDayjs()

    return (
        <Fragment>
            <Grid container className={classes.comment}>
                <Grid item sm={2} style={{ position: `relative` }}>
                    <img src={userImage} alt='user' className={classes.image} />
                    <IsOnline handle={userHandle} />
                </Grid>
                <Grid item sm={10}>
                    <div className={classes.header}>
                        <Typography variant='h6' color='secondary' className={classes.userHandle}>
                            {userHandle}
                        </Typography>
                        <Typography variant='body2' className={classes.date}>
                            {dayjs(createdAt).fromNow()}
                        </Typography>
                    </div>

                    <Typography variant='body1' className={classes.body}>
                        {body}
                    </Typography>
                </Grid>
            </Grid>
        </Fragment >
    )
}