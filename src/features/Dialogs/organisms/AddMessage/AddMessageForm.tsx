import { useFormik } from "formik";
import React from "react";
import * as yup from 'yup'
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { Button, SendButton } from 'features/common'
import classes from '../../styles.module.scss'
import { AddMessageFormType } from "features/Dialogs/types";


export const AddMessageForm: React.FC<AddMessageFormType> = ({ addMessage, fetchError }) => {
    const { handleSubmit, handleChange, handleBlur, values, errors, touched, resetForm } = useFormik({
        initialValues: {
            message: '',
        },
        validationSchema: yup.object().shape({
            message: yup.string().max(500, 'Слишком много символов').required('обязательное поле'),
        }),
        onSubmit: values => {
            addMessage(values.message)
            resetForm()
        }
    })

    return (
        <form onSubmit={handleSubmit} className={classes.sendForm}>
            <TextField id='message' name='message' type='text' label='Новое сообщение'
                className={classes.textField}
                fullWidth
                rowsMax={18}
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.message && errors.message}
            />
            {fetchError
                ? <Typography variant='body2' color='error'>{fetchError}</Typography>
                : null}
            <Button
                className={classes.btnBig}
                type='submit'
                variant='contained'
                color='primary'
            >
                Отправить
            </Button>
            <SendButton />
        </form>
    )
}
