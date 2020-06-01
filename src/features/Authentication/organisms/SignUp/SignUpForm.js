import { useFormik } from "formik";
import React from "react";
import * as yup from 'yup'
import { useStyles } from "../../styles";
import logo from '../../../../assets/titleLogo.png'
import { Button, Typography } from "../../../common";
import TextField from "@material-ui/core/TextField";
import CircularProgress from '@material-ui/core/CircularProgress';
import { NavLink } from 'react-router-dom'


export const SignUpForm = ({ signUp, loginError, loading }) => {
    const classes = useStyles()
    const { handleSubmit, handleChange, handleBlur, values, errors, touched } = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: '',
            handle: ''
        },
        validationSchema: yup.object().shape({
            email: yup.string().min(5, 'Минимум 5 символов').required('обязательное поле'),
            password: yup.string().min(5, 'Минимум 5 символов').required('обязательное поле'),
            confirmPassword: yup.string().min(5, 'Минимум 5 символов').required('обязательное поле'),
            handle: yup.string().min(3, 'Минимум 3 символа').required('обязательное поле')
        }),
        onSubmit: values => {
            signUp({ ...values })
        }
    })

    return (
        <form onSubmit={handleSubmit} className={classes.form}>
            <img src={logo} alt="goose" className={classes.logo} />
            <Typography variant='h3' color='primary' className={classes.title}>Регистрация</Typography>
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
            <TextField id='confirmPassword' name='confirmPassword' type='password' label='Подтвердите пароль'
                className={classes.textField}
                fullWidth
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.confirmPassword && errors.confirmPassword}
                error={errors.confirmPassword && touched.confirmPassword}
            />
            <TextField id='handle' name='handle' type='text' label='Имя пользователя'
                className={classes.textField}
                fullWidth
                value={values.handle}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.handle && errors.handle}
                error={errors.handle && touched.handle}
            />
            {loginError
                ? <Typography variant='body2' color='error'>{loginError}</Typography>
                : null}
            <Button
                type='submit'
                variant='contained'
                color='primary'
                className={classes.button}
                disabled={loading}
            >
                Зарегистрироваться
                {loading
                    ? <CircularProgress className={classes.loader} size={30} />
                    : null}
            </Button>
            <p>
                Уже есть аккаунт? <NavLink to='/login' className={classes.link}><strong>Войти</strong></NavLink>
            </p>
        </form>
    )
}