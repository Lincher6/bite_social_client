import React from 'react'
import { Typography } from '@material-ui/core'
import classes from '../styles.module.scss'
import { NavLink } from 'react-router-dom'
import { useDayjs } from 'lib/hooks/useDayjs'
import { DialogType } from '../model/types'

export const Dialog: React.FC<DialogType> = React.memo(({ recipient, recipientImageUrl, newMessages, id, activeAt }) => {
    const { dayjs } = useDayjs()

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