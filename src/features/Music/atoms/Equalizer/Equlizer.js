import React from 'react'
import './styles.scss'

export const Equalizer = (props) => {
    return (
        <div className="equalizer" >
            <ul id="bares-container">
                <li className="first-bar playEqualizer"></li>
                <li className="second-bar playEqualizer"></li>
                <li className="third-bar playEqualizer"></li>
                <li className="fourth-bar playEqualizer"></li>
                <li className="fifth-bar playEqualizer"></li>

                <li className="first-bar playEqualizer"></li>
                <li className="second-bar playEqualizer"></li>
                <li className="third-bar playEqualizer"></li>
                <li className="fourth-bar playEqualizer"></li>
                <li className="fifth-bar playEqualizer"></li>

                <li className="first-bar playEqualizer"></li>
                <li className="second-bar playEqualizer"></li>
                <li className="third-bar playEqualizer"></li>
                <li className="fourth-bar playEqualizer"></li>
                <li className="fifth-bar playEqualizer"></li>
            </ul>
        </div>
    )
}