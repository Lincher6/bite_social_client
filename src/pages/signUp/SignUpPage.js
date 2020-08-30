import React, { useCallback, useEffect } from 'react'
import Grid from '@material-ui/core/Grid';
import { SignUp } from "features/Authentication";
import { uiSelectors, uiActions } from 'features/Navigation';
import { profileActions } from 'features/Profile';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ErrorBoundary } from 'features/common';

export const SignUpPage = props => {
    const history = useHistory()
    const { errors, loading } = useSelector(uiSelectors.ui)
    const dispatch = useDispatch()

    const signUp = useCallback(async (credentials) => {
        dispatch(profileActions.signUp(credentials, history))
    }, [dispatch, history])

    useEffect(() => {
        return () => dispatch(uiActions.clearErrors_AC())
    }, [dispatch, history])

    return (
        <Grid container>
            <Grid item sm />
            <Grid item sm>
                <ErrorBoundary>
                    <SignUp
                        signUp={signUp}
                        loginError={errors.error}
                        isLoading={loading}
                    />
                </ErrorBoundary>
            </Grid>
            <Grid item sm />
        </Grid>
    )
}