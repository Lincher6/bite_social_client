import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { userSelectors } from '../../model/user'

export const AuthRoute = ({ component: Component, ...rest }) => {
    const { authenticated } = useSelector(userSelectors.user)

    return (
        <Route
            {...rest}
            render={props => {
                return authenticated
                    ? <Redirect to='/' />
                    : <Component {...props} />
            }}
        />
    )
}