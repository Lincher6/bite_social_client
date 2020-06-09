import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { usersActions, usersSelectors } from '../../model'
import { useStyles } from '../../styles'
import { CircularProgress } from '@material-ui/core'
import { LoadMore } from '../../../Bites/molecules/LoadMore'
import { User } from '../User.js/User'

export const UsersList = (props) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const [offset, setOffset] = useState(0)
    const { users, loadingUser } = useSelector(usersSelectors.users)


    useEffect(() => {
        dispatch(usersActions.getUsers())
    }, [dispatch, offset])

    return (
        <div className={classes.list}>
            {users.map(user => {
                return (
                    <User
                        key={user.handle}
                        {...user}
                    />
                )
            })}
            {loadingUser
                ? <CircularProgress size={80} />
                : <LoadMore offset={offset} setOffset={setOffset} haveMore={true} />
            }
        </div>
    )
}