import React from 'react'
import { Card, CardMedia, Typography } from '@material-ui/core'
import LocationOn from '@material-ui/icons/LocationOn';
import { useStyles } from '../styles'
import { NavLink } from 'react-router-dom'
import { EditButton, StartDialog } from 'features/common'
import { Follow } from '../molecules/Follow';
import { EmailOutlined } from '@material-ui/icons';
import { IsOnline } from 'features/common/';

export const User = React.memo(({ imageUrl, handle, bio, location, isMe }) => {
    const classes = useStyles()

    return (
        <Card className={classes.user} >
            <CardMedia
                className='image'
                image={imageUrl}
                component={NavLink}
                to={`/users/${handle}`}
                title='User image'
            >
                <IsOnline handle={handle} />
            </CardMedia>

            <div>
                <Typography
                    variant='h5'
                    component={NavLink}
                    to={`/users/${handle}`}
                    color='secondary'
                >
                    {handle}
                </Typography>
                <div className="info">
                    <Typography
                        variant='body2'
                    >
                        <LocationOn color='secondary' style={{ fontSize: `18px` }} />&nbsp;{location || 'нет информации'}
                    </Typography>
                </div>
            </div>

            <div className='actions'>
                {
                    !isMe
                        ? <div className="actions">
                            <Follow userHandle={handle} />
                            <StartDialog recipient={handle} />
                        </div>
                        : null
                }
            </div>
        </Card >
    )
})