import { useFormik } from "formik";
import React from "react";
import * as yup from 'yup'
import TextField from "@material-ui/core/TextField";
import { Button } from '../../common/styled-components'


export const EditProfileForm = ({ bio, location, website, editUserData, setOpen }) => {
    const { handleSubmit, handleChange, handleBlur, values, errors, touched } = useFormik({
        initialValues: {
            bio: bio || '',
            location: location || '',
            website: website || ''
        },
        validationSchema: yup.object().shape({
            bio: yup.string().max(150, 'Слишком много символов'),
            location: yup.string().max(50, 'Слишком много символов'),
            website: yup.string().max(50, 'Слишком много символов'),
        }),
        onSubmit: values => {
            editUserData({ ...values })
        }
    })

    return (
        <form onSubmit={handleSubmit} className='form'>
            <TextField id='bio' name='bio' type='text' label='Про меня'
                className='textField'
                fullWidth
                multiline
                value={values.bio}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.bio && errors.bio}
                error={errors.bio && touched.bio}
            />
            <TextField id='location' name='location' type='text' label='Место жительства'
                className='textField'
                fullWidth
                value={values.location}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.location && errors.location}
                error={errors.location && touched.location}
            />
            <TextField id='website' name='website' type='text' label='Мой сайт'
                className='textField'
                fullWidth
                value={values.website}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.website && errors.website}
                error={errors.website && touched.website}
            />
            <Button
                className='button'
                type='submit'
                variant='contained'
                color='primary'
            >
                Сохранить
            </Button>
            <Button
                className='button'

                variant='outlined'
                onClick={() => setOpen(false)}
            >
                Отменить
            </Button>
        </form>
    )
}

