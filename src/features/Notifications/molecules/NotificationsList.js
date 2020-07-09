import React from 'react'
import { MenuItem, Menu, Typography } from '@material-ui/core'
import { Notification } from './Notification'
import { useStyles } from '../styles'

export const NotificationsList = ({ notifications, anchorEl, handleClose }) => {
    const classes = useStyles()

    return (
        <Menu
            id="simple-menu"
            className={classes.notificationsList}
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >
            {
                notifications.length === 0
                    ? <MenuItem>
                        <Typography>Нет уведомлений</Typography>
                    </MenuItem>
                    : notifications.map(notification => {
                        return (
                            <MenuItem key={notification.createdAt} >
                                <Notification
                                    {...notification}
                                />
                            </MenuItem>
                        )
                    })

            }
        </Menu>
    )
}