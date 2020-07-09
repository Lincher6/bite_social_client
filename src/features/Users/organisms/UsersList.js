import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { usersActions, usersSelectors } from '../model'
import { useStyles } from '../styles'
import { LoadMore } from '../../common/LoadMore'
import { User } from './User'
import { profileSelectors } from '../../Profile'
import { UserSkeleton } from '../../common'

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

        return () => dispatch(usersActions.setSearchParams_AC({}))
    }, [dispatch, offset])

    useEffect(() => {
        dispatch(usersActions.clearUsers_AC())
        setOffset(0)
        dispatch(usersActions.getUsers(offset, searchParameters))
    }, [dispatch, searchParameters])

    return (
        <div style={{ textAlign: `center` }}>
            <div className={classes.userList}>
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
                    ? <UserSkeleton />
                    : null
                }
            </div>
            {loadingUser
                ? null
                : <LoadMore offset={offset} setOffset={setOffset} haveMore={haveMoreUsers} />
            }
        </div>
    )
}