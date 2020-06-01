import React, { useCallback, useEffect } from 'react'
import Grid from '@material-ui/core/Grid';
import { SignUp } from "../../features/Authentication";
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { uiSelectors, uiActions } from '../../features/Navigation';
import { profileActions } from '../../features/Profile';

export const SignUpPage = props => {
    const history = useHistory()
    const { errors, loading } = useSelector(uiSelectors.ui)
    const dispatch = useDispatch()

    const signUp = useCallback(async (credentials) => {
        dispatch(profileActions.signUp(credentials, history))
    }, [])

    useEffect(() => {
        return () => dispatch(uiActions.clearErrors_AC())
    }, [])

    return (
        <Grid container>
            <Grid item sm />
            <Grid item sm>
                <SignUp signUp={signUp} loginError={errors.error} loading={loading} />
            </Grid>
            <Grid item sm />
        </Grid>
    )
}