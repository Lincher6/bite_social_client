import React from 'react'
import Tooltip from "@material-ui/core/Tooltip"
import IconButton from "@material-ui/core/IconButton"


export const EditButton = ({ children, onClick = undefined, tip, className = undefined, ...props }) => {
    return (
        <Tooltip placement='top' title={tip}>
            <IconButton onClick={onClick} className={className} {...props}>
                {children}
            </IconButton>
        </Tooltip>
    )
}
