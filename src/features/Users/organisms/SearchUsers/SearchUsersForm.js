import { useFormik } from "formik";
import React from "react";
import { useStyles } from "../../styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "../../../common";
import { Card, IconButton } from "@material-ui/core";
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SearchIcon from '@material-ui/icons/Search';

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
            <form onSubmit={handleSubmit} className={classes.saerchForm}>
                <div className='field'>
                    <TextField id='handle' name='handle' type='text' label='Имя'
                        fullWidth
                        value={values.handle}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <PersonIcon className='icon' />
                </div>
                <div className='field'>
                    <TextField id='email' name='email' type='text' label='Email'
                        fullWidth
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <EmailIcon className='icon' />
                </div>
                <div className='field'>
                    <TextField id='location' name='location' type='text' label='Город'
                        fullWidth
                        value={values.location}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <LocationOnIcon className='icon' />
                </div>

                <Button
                    type='submit'
                    variant='contained'
                    color='primary'
                >
                    <SearchIcon />Найти
            </Button>
            </form>
        </Card>

    )
}
