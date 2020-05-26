import React from 'react'
import Tooltip from "@material-ui/core/Tooltip"
import IconButton from "@material-ui/core/IconButton"


export const EditButton = ({children, onClick, tip, className}) => {
    return (
        <Tooltip placement='top' title={tip}>
            <IconButton onClick={onClick} className={className}>
                {children}
            </IconButton>
        </Tooltip>
    )
}