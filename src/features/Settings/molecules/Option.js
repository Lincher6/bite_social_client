import React from 'react'
import InfoIcon from '@material-ui/icons/Info';
import { NavLink } from 'react-router-dom';

export const Option = ({ Icon, link, title }) => {
    return (
        <NavLink to={link} className="item">
            <div>
                {title}
            </div>
            <div>
                <Icon />
            </div>
        </NavLink>
    )
}