import React, { Fragment } from 'react'
import { Grid, Typography } from '@material-ui/core'
import { useStyles } from '../styles'
import { useDayjs } from 'lib/hooks/useDayjs'

export const Comment = ({ userHandle, userImage, body, createdAt }) => {
    const classes = useStyles()
    const { dayjs } = useDayjs()

    return (
        <Fragment>
            <Grid container className={classes.comment}>
                <Grid item sm={2} >
                    <img src={userImage} alt='user' className='image' />
                </Grid>
                <Grid item sm={10}>
                    <div className='header'>
                        <Typography variant='h6' color='secondary' className='user-handle'>
                            {userHandle}
                        </Typography>
                        <Typography variant='body2' className='date'>
                            {dayjs(createdAt).fromNow()}
                        </Typography>
                    </div>

                    <Typography variant='body1' className='body'>
                        {body}
                    </Typography>
                </Grid>
            </Grid>
        </Fragment >
    )
}