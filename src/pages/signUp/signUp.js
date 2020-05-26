import React, { useState, useCallback, useEffect } from 'react'
import Grid from '@material-ui/core/Grid';
import { SignUpForm } from "../../components/Authentication/SignUp";
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { uiSelectors, uiActions } from '../../model/ui';
import { userActions } from '../../model/user';

export const SignUp = props => {
    const history = useHistory()
    const { errors, loading } = useSelector(uiSelectors.ui)
    const dispatch = useDispatch()

    const signUp = useCallback(async (credentials) => {
        dispatch(userActions.signUp(credentials, history))
    }, [])

    useEffect(() => {
        return () => dispatch(uiActions.clearErrors_AC())
    },[])

    return (
        <Grid container>
            <Grid item sm />
            <Grid item sm>
                <SignUpForm signUp={signUp} loginError={errors.error} loading={loading}/>
            </Grid>
            <Grid item sm />
        </Grid>
    )
}