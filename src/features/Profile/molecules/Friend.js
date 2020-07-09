import React, { Fragment } from 'react'
import { useStyles } from '../styles'
import { Typography } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import { ButtonSmall, EditButton } from '../../common'
import { Follow } from '../../Users/molecules/Follow'
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';

export const Friend = ({ handle, imageUrl }) => {
    const classes = useStyles()

    return (
        <Fragment>
            <div className={classes.friend} >
                <NavLink to={`/users/${handle}`}>
                    <img src={imageUrl} alt={'friend'} className='friend-image' />
                </NavLink>
                <div className='friend-info'>
                    <div style={{ display: `flex`, alignItems: `center` }}>
                        <NavLink to={`/users/${handle}`} >
                            <Typography variant='body1' color='secondary' className='friend-handle'>
                                {handle}
                            </Typography>
                        </NavLink>
                        <EditButton tip='написать'>
                            <EmailOutlinedIcon color='secondary' />
                        </EditButton>
                    </div>

                    <Follow userHandle={handle} />
                </div>
            </div >

        </Fragment>

    )
}