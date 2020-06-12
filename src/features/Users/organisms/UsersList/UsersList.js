import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { usersActions, usersSelectors } from '../../model'
import { useStyles } from '../../styles'
import { CircularProgress } from '@material-ui/core'
import { LoadMore } from '../../../Bites/molecules/LoadMore'
import { User } from '../User.js/User'
import { profileSelectors } from '../../../Profile'

export const UsersList = (props) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const [offset, setOffset] = useState(0)
    const { users, loadingUser, haveMoreUsers, searchParameters } = useSelector(usersSelectors.users)
    const { handle } = useSelector(profileSelectors.credentials)


    useEffect(() => {
        if (offset !== 0) {
            dispatch(usersActions.getUsers(offset, searchParameters))
        }
    }, [dispatch, offset])

    useEffect(() => {
        dispatch(usersActions.clearUsers_AC())
        setOffset(0)
        dispatch(usersActions.getUsers(offset, searchParameters))
    }, [dispatch, searchParameters])

    return (
        <div className={classes.list}>
            {users.map(user => {
                return (
                    <User
                        key={user.handle}
                        isMe={handle === user.handle}
                        {...user}
                    />
                )
            })}
            {loadingUser
                ? <CircularProgress size={80} />
                : <LoadMore offset={offset} setOffset={setOffset} haveMore={haveMoreUsers} />
            }
        </div>
    )
}