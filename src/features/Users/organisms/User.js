import React from 'react'
import { Card, CardMedia, Typography } from '@material-ui/core'
import LocationOn from '@material-ui/icons/LocationOn';
import { useStyles } from '../styles'
import { NavLink } from 'react-router-dom'
import { EditButton } from 'features/common'
import { Follow } from '../molecules/Follow';
import { EmailOutlined } from '@material-ui/icons';

export const User = ({ imageUrl, handle, bio, location, isMe }) => {
    const classes = useStyles()

    return (
        <Card className={classes.user}>
            <CardMedia
                className='image'
                image={imageUrl}
                component={NavLink}
                to={`/users/${handle}`}
                title='User image'
            />

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
                            <EditButton tip='написать'>
                                <EmailOutlined color='secondary' />
                            </EditButton>
                        </div>
                        : null
                }
            </div>
        </Card >
    )
}