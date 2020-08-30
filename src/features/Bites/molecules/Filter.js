import React, { useState } from 'react'
import classes from '../styles.module.scss'
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { bitesActions } from '../model'

export const Filter = (props) => {
    const dispatch = useDispatch()

    const handleChange = (event) => {
        dispatch(bitesActions.setBiteFilter_AC(event.target.value))
    };

    return (
        <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Сортировать</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                onChange={handleChange}
            >
                <MenuItem value={'desc'}>Сначала новые</MenuItem>
                <MenuItem value={'asc'}>Сначала старые</MenuItem>
            </Select>
        </FormControl>
    )
}