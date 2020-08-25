import React from 'react'
import { Card, Typography, Badge } from '@material-ui/core'
import classes from '../styles.module.scss'
import { NavLink } from 'react-router-dom'
import { useDayjs } from 'lib/hooks/useDayjs'

export const Dialog = React.memo(({ recipient, recipientImageUrl, newMessages, id, activeAt }) => {
    const { dayjs, options } = useDayjs()

    return (
        <NavLink to={`/dialogs/${id}`} activeClassName={classes.active}>
            <div className={classes.dialog}>
                <img src={recipientImageUrl} alt="recipient" className={classes.image} />
                <div className={classes.container}>
                    <div>
                        <Typography variant='body1' className={classes.recipient}>
                            {recipient}
                        </Typography>
                        <Typography variant='body2' color='secondary' className={classes.activeAt}>
                            {dayjs(new Date(activeAt.seconds * 1000)).fromNow()}
                        </Typography>
                    </div>

                    {
                        !!newMessages &&
                        <Typography variant='body2' className={classes.count}>
                            {newMessages}
                        </Typography>
                    }
                </div>
            </div>
        </NavLink>


    )
})