import React, { useCallback, useEffect } from 'react'
import Grid from '@material-ui/core/Grid';
import { LoginForm } from "../../components/Authentication/Login";
import { useHistory } from 'react-router-dom';
import { userActions } from '../../model/user'
import { uiSelectors, uiActions } from '../../model/ui'
import { useDispatch, useSelector } from 'react-redux'

export const Login = props => {
    const history = useHistory()
    const dispatch = useDispatch()
    const { errors, loading } = useSelector(uiSelectors.ui)

    const login = useCallback(async (credentials) => {
        dispatch(userActions.login(credentials, history))

    }, [])

    useEffect(() => {
        return () => dispatch(uiActions.clearErrors_AC())
    },[])

    return (
        <Grid container>
            <Grid item sm />
            <Grid item sm>
                <LoginForm login={login} loginError={errors.error} loading={loading}/>
            </Grid>
            <Grid item sm />
        </Grid>
    )
}