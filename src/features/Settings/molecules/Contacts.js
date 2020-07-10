import React from 'react'
import InfoIcon from '@material-ui/icons/Info';
import { NavLink } from 'react-router-dom';

export const Contacts = (props) => {
    return (
        <NavLink to='/contacts' className="item">
            <div>
                Контакты
                    </div>
            <div>
                <InfoIcon />
            </div>
        </NavLink>
    )
}