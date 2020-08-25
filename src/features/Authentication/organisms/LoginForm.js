import { useFormik } from "formik";
import React from "react";
import * as yup from 'yup'
import { useStyles } from "../styles";
import logo from 'ui/assets/titleLogo.png'
import TextField from "@material-ui/core/TextField";
import CircularProgress from '@material-ui/core/CircularProgress';
import { NavLink } from 'react-router-dom'
import { Button, Typography } from "features/common";


export const LoginForm = ({ login, loginError, loading }) => {
    const classes = useStyles()
    const { handleSubmit, handleChange, handleBlur, values, errors, touched } = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: yup.object().shape({
            email: yup.string().min(5, 'Минимум 5 символов').required('обязательное поле'),
            password: yup.string().min(5, 'Минимум 5 символов').required('обязательное поле')
        }),
        onSubmit: values => {
            login({ ...values })
        }
    })

    return (
        <form onSubmit={handleSubmit} className={classes.form}>
            <img src={require('ui/assets/titleLogo.png')} alt="goose" className={classes.logo} />
            <Typography variant='h3' color='primary' className={classes.title}>Войти</Typography>
            <TextField id='email' name='email' type='email' label='Email'
                className={classes.textField}
                fullWidth
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.email && errors.email}
                error={errors.email && touched.email}
            />
            <TextField id='password' name='password' type='password' label='Пароль'
                className={classes.textField}
                fullWidth
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.password && errors.password}
                error={errors.password && touched.password}
            />
            {loginError
                ? <Typography variant='body2' color='error'>{loginError}</Typography>
                : null}
            <Button
                type='submit'
                variant='contained'
                className={classes.button}
                color='primary'
                disabled={loading}
            >
                Войти
                {loading
                    ? <CircularProgress className={classes.loader} size={30} />
                    : null}
            </Button>
            <p>
                Нет аккаунта? <NavLink to='/signUp' className={classes.link}><strong>Создать</strong></NavLink>
            </p>
        </form>
    )
}

