import React, { Fragment } from 'react'
import { useStyles } from '../../styles'
import { Typography, Button } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import { ButtonSmall } from '../../../common'

export const Friend = ({ handle, imageUrl }) => {
    const classes = useStyles()

    return (
        <Fragment>
            <div className={classes.friend} >
                <NavLink to={`/users/${handle}`}>
                    <img src={imageUrl} alt={'friend'} className='friend-image' />
                </NavLink>
                <div className='friend-info'>
                    <NavLink to={`/users/${handle}`} >
                        <Typography variant='h6' color='primary' className='friend-handle'>
                            {handle}
                        </Typography>
                    </NavLink>

                    <ButtonSmall variant='outlined' color='secondary'>Написать</ButtonSmall>
                </div>
            </div >

        </Fragment>

    )
}