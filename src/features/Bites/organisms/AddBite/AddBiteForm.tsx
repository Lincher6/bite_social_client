import { useFormik } from "formik";
import React from "react";
import * as yup from 'yup'
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { Button } from 'features/common'
import CircularProgress from '@material-ui/core/CircularProgress';
import classes from '../../styles.module.scss'
import { AddBiteFormType } from "features/Bites/types";


export const AddBiteForm: React.FC<AddBiteFormType> = ({ addBite, fetchError, loading }) => {
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
            <TextField id='biteText' name='biteText' type='text' label='Новый пост'
                className={classes.textField}
                fullWidth
                multiline
                rowsMax={18}
                value={values.biteText}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.biteText && errors.biteText}
                error={!!(errors.biteText && touched.biteText)}
            />
            {fetchError
                ? <Typography variant='body2' color='error'>{fetchError}</Typography>
                : null}
            <Button
                className={classes.button}
                type='submit'
                variant='contained'
                color='primary'
                disabled={loading}
            >
                Опубликовать
                {loading
                    ? <CircularProgress size={30} className={classes.loader} />
                    : null}
            </Button>
        </form>
    )
}

