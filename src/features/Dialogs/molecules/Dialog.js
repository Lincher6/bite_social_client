import React from 'react'
import { Card, Typography, Badge } from '@material-ui/core'
import classes from '../styles.module.scss'
import { NavLink } from 'react-router-dom'

export const Dialog = ({ recipient, recipientImageUrl, newMessages, id }) => {
    return (
        <NavLink to={`/dialogs/${id}`} activeClassName={classes.active}>
            <div className={classes.dialog}>
                <img src={recipientImageUrl} alt="recipient" className={classes.image} />
                <div className={classes.container}>
                    <Typography variant='body1'>
                        {recipient}
                    </Typography>
                    <Typography variant='body2' className={classes.count}>
                        {12}
                    </Typography>
                </div>
            </div>
        </NavLink>


    )
}