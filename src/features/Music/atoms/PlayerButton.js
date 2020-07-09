import React from 'react'
import { IconButton } from '@material-ui/core'

export const PlayerButton = ({ Icon, active, clickHandler }) => {
    return (
        <IconButton onClick={clickHandler}>
            <Icon color={active ? 'primary' : 'inherit'} />
        </IconButton>
    )
}