import React, { useState } from 'react'
import Typography from "@material-ui/core/Typography";
import { useStyles } from "../styles";


export const ReadMore = ({ text, maxCharacters = 200 }) => {
    const classes = useStyles()
    const [collapsed, setCollapsed] = useState(true)

    if (text.length < maxCharacters) {
        return <Typography style={{ whiteSpace: 'pre-line' }} variant='body1'> {text} </Typography>
    }

    const helperText = collapsed ? ' дальше...' : ' назад'
    if (collapsed) {
        text = text.slice(0, maxCharacters)
    }

    const toggleCollapsed = () => {
        setCollapsed(!collapsed)
    }

    return (
        <Typography style={{ whiteSpace: 'pre-line' }} variant='body1'>
            {text}
            <span
                onClick={toggleCollapsed}
                className={classes.helperText}
            >{helperText}</span>
        </Typography>
    )
}