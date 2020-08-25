import React from 'react'
import { Typography } from '@material-ui/core'
import classes from '../styles.module.scss'
import { NavLink } from 'react-router-dom'
import noImg from 'ui/assets/no-avatar.png'
import { useDayjs } from 'lib/hooks/useDayjs'
import { MessageStatus } from './MessageStatus'
import { DeleteMessage } from './DeleteMessage'

export const Message = React.memo(({ recipient, sender, senderImageUrl = noImg, body, createdAt, read, isMine, isSend = true, id }) => {
    const { dayjs, options } = useDayjs()

    return (
        <div className={`${classes.message} ${isMine ? classes.sender : classes.recipient}`}>
            <NavLink to={`/users/${sender}`} >
                <img src={senderImageUrl} alt="user" className={classes.image} />
            </NavLink>
            <div className={`${classes.body} ${isMine ? classes.sender : classes.recipient}`}>
                <Typography variant='body2' color='primary'>
                    {isMine ? `Вы:` : `${sender}:`}
                </Typography>
                <Typography variant='body1'>
                    {body}
                </Typography>
                <div className={classes.info}>
                    <MessageStatus isSend={isSend} isRead={read} />
                    <div className={classes.date}>
                        {dayjs(createdAt).format(options.strict)}
                    </div>
                </div>
                {isMine && isSend && <DeleteMessage id={id} />}
            </div>

        </div>


    )
})