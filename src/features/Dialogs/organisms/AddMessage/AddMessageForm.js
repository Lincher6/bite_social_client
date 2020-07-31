import { useFormik } from "formik";
import React from "react";
import * as yup from 'yup'
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { Button } from 'features/common'
import CircularProgress from '@material-ui/core/CircularProgress';
import { useStyles } from "../../styles";


export const AddBiteForm = ({ addMessage, fetchError }) => {
    const { handleSubmit, handleChange, handleBlur, values, errors, touched } = useFormik({
        initialValues: {
            message: '',
        },
        validationSchema: yup.object().shape({
            message: yup.string().max(500, 'Слишком много символов').required('обязательное поле'),
        }),
        onSubmit: values => {
            addMessage({ body: values.biteText })
        }
    })

    return (
        <form onSubmit={handleSubmit} >
            <TextField id='message' name='message' type='text' label='Новое сообщение'
                className='textField'
                fullWidth
                multiline
                rowsMax={18}
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.message && errors.message}
                error={errors.message && touched.message}
            />
            {fetchError
                ? <Typography variant='body2' color='error'>{fetchError}</Typography>
                : null}
            <Button
                className='button'
                type='submit'
                variant='contained'
                color='primary'
            >
                Отправить
            </Button>
        </form>
    )
}
