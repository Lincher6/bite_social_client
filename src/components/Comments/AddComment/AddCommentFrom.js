import { useFormik } from "formik";
import React from "react";
import * as yup from 'yup'
import { useStyles } from "../styles";
import TextField from "@material-ui/core/TextField";
import { Button } from '../../common/styled-components'
import CircularProgress from '@material-ui/core/CircularProgress';
import { Typography } from "@material-ui/core";


export const AddCommentForm = ({ addComment, fetchError, loading }) => {
    const classes = useStyles()
    const { handleSubmit, handleChange, handleBlur, values, errors, touched, resetForm } = useFormik({
        initialValues: {
            comment: ''
        },
        validationSchema: yup.object().shape({
            comment: yup.string().max(1000, 'Слишком много символов').required('обязательное поле'),
        }),
        onSubmit: values => {
            addComment({ body: values.comment })
            resetForm()
        }
    })

    return (
        <form onSubmit={handleSubmit} className={classes.addCommentForm}>
            <TextField id='comment' name='comment' type='text' label='Оставьте комментарий'
                className='textField'
                fullWidth
                value={values.comment}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.comment && errors.comment}
                error={errors.comment && touched.comment}
            />
            {fetchError
                ? <Typography variant='body2' color='error'>{fetch}</Typography>
                : null}
            <Button
                type='submit'
                variant='contained'
                color='primary'
                className='button'
                disabled={loading}
            >
                Отправить
                {loading
                    ? <CircularProgress className='formLoader' size={30} />
                    : null}
            </Button>
        </form>
    )
}

