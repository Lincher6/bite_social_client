import { useFormik } from "formik";
import React from "react";
import * as yup from 'yup'
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { Button } from '../../../common'
import CircularProgress from '@material-ui/core/CircularProgress';
import { useStyles } from "../../styles";


export const AddBiteForm = ({ addBite, fetchError, loading }) => {
    const classes = useStyles()
    const { handleSubmit, handleChange, handleBlur, values, errors, touched } = useFormik({
        initialValues: {
            biteText: '',
        },
        validationSchema: yup.object().shape({
            biteText: yup.string().max(500, 'Слишком много символов').required('обязательное поле'),
        }),
        onSubmit: values => {
            addBite({ body: values.biteText })
        }
    })

    return (
        <form onSubmit={handleSubmit} className={classes.addBiteForm}>
            <TextField id='biteText' name='biteText' type='text' label='Новый байт'
                className='textField'
                fullWidth
                multiline
                rowsMax={18}
                value={values.biteText}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.biteText && errors.biteText}
                error={errors.biteText && touched.biteText}
            />
            {fetchError
                ? <Typography variant='body2' color='error'>{fetchError}</Typography>
                : null}
            <Button
                className='button'
                type='submit'
                variant='contained'
                color='primary'
                disabled={loading}
            >
                Опубликовать
                {loading
                    ? <CircularProgress size={30} className='loader' />
                    : null}
            </Button>
        </form>
    )
}

