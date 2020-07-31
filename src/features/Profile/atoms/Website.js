import React from 'react'
import LinkIcon from '@material-ui/icons/Link';


export const Website = ({ website }) => {

    return website
        ? <a href={website} target='blank'>
            <LinkIcon color='primary' className='icon' />&nbsp;
            <span>
                {website}
            </span>
        </a>
        : <div className='disabled'>
            <LinkIcon className='icon' />&nbsp;
            <span>нет информации</span>
        </div>

}