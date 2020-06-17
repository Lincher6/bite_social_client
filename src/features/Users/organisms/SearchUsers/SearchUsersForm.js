import { useFormik } from "formik";
import React from "react";
import { useStyles } from "../../styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "../../../common";
import { Card } from "@material-ui/core";


export const SearchUsersForm = ({ setSearchParams }) => {
    const classes = useStyles()
    const { handleSubmit, handleChange, handleBlur, values } = useFormik({
        initialValues: {
            handle: '',
            email: '',
            location: ''
        },
        onSubmit: values => {
            setSearchParams({ ...values })
        }
    })

    return (
        <Card>
            <form onSubmit={handleSubmit} className={classes.form}>
                <TextField id='handle' name='handle' type='text' label='Имя'
                    fullWidth
                    value={values.handle}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className='field'
                />
                <TextField id='email' name='email' type='text' label='Email'
                    fullWidth
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className='field'
                />
                <TextField id='location' name='location' type='text' label='Город'
                    fullWidth
                    value={values.location}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className='field'
                />
                <Button
                    type='submit'
                    variant='contained'
                    color='primary'
                >
                    Найти
            </Button>
            </form>
        </Card>

    )
}
