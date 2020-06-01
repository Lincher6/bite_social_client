import { useFormik } from "formik";
import React from "react";
import * as yup from 'yup'
import { useStyles } from "../../styles";
import TextField from "@material-ui/core/TextField";
import { Button } from '../../../common'
import CircularProgress from '@material-ui/core/CircularProgress';
import { Typography } from "@material-ui/core";


export const AddCommentForm = ({ addComment, fetchError, loading, focus }) => {
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

    const handleKeyPress = e => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            handleSubmit()
        }
    }

    return (
        <form onSubmit={handleSubmit} onKeyPress={handleKeyPress} className={classes.addCommentForm}>
            <TextField id='comment' name='comment' type='text' label='Оставьте комментарий'
                className='textField'
                fullWidth
                multiline
                rowsMax={8}
                value={values.comment}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.comment && errors.comment}
                error={errors.comment && touched.comment}
                autoFocus={focus}
            />
            {fetchError
                ? <Typography variant='body2' color='error'>{fetchError}</Typography>
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

