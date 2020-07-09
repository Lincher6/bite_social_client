import React, { useState, Fragment, useCallback } from 'react'
import { Badge, IconButton, Tooltip } from '@material-ui/core'
import { Notifications as NotificationsIcon } from "@material-ui/icons";
import { useSelector, useDispatch } from 'react-redux';
import { profileSelectors, profileActions } from '../../Profile';
import { NotificationsList } from '../molecules/NotificationsList';

export const Notifications = (props) => {
    const [anchorEl, setAnchorEl] = useState(null)
    const dispatch = useDispatch()
    const notifications = useSelector(profileSelectors.notifications)

    const handleClose = useCallback(() => {
        setAnchorEl(null)
        const notificationsIds = notifications
            .filter(notification => !notification.read)
            .map(notification => notification.id)
        dispatch(profileActions.markNotifications(notificationsIds))
    }, [dispatch, notifications])

    const handleOpen = useCallback((event) => {
        setAnchorEl(event.target)
    }, [])

    return (
        <Fragment>
            <Tooltip title="Уведомления">
                <IconButton
                    aria-owns={anchorEl ? 'simple-menu' : undefined}
                    aria-haspopup="true"
                    onClick={handleOpen}
                >
                    <Badge
                        badgeContent={
                            notifications.filter((notification) => notification.read === false).length
                        }
                        color="secondary"
                    >
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
            </Tooltip>

            <NotificationsList
                notifications={notifications}
                anchorEl={anchorEl}
                handleClose={handleClose}
            />
        </Fragment>

    )
}