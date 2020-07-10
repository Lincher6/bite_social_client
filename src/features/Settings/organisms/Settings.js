import React, { useState, Fragment, useCallback } from 'react'
import SettingsIcon from '@material-ui/icons/Settings';
import { SettingsMenu } from './SettingsMenu';
import { IconButton, Tooltip } from '@material-ui/core'
import { useStyles } from '../styles';

export const Settings = (props) => {
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = useState(null)

    const handleClose = useCallback(() => {
        setAnchorEl(null)
    }, [])

    const handleOpen = useCallback((event) => {
        setAnchorEl(event.target)
    }, [])

    return (
        <Fragment>
            <Tooltip title="настройки">
                <IconButton
                    aria-owns={anchorEl ? 'simple-menu' : undefined}
                    aria-haspopup="true"
                    onClick={handleOpen}
                >
                    <SettingsIcon className={classes.settingsIcon} />
                </IconButton>
            </Tooltip>

            <SettingsMenu
                anchorEl={anchorEl}
                handleClose={handleClose}
            />
        </Fragment>

    )
}