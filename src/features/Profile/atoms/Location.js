import React from 'react'
import LocationOn from '@material-ui/icons/LocationOn'
import { Dialog } from '@material-ui/core'


export const Location = ({ location }) => {

    return location
        ? <a href={`https://www.google.com.ua/maps/place/${location}`} target='_blanck'>
            <LocationOn color='primary' className='icon' />&nbsp;
            <span>
                {location}
            </span>
        </a>
        : <div className='disabled'>
            <LocationOn className='icon' />&nbsp;
            <span>нет информации</span>
        </div>

}