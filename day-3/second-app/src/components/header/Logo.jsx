import React from 'react'
import logo from '../../assets/logo.jpg'

export default function Logo() {
    return (
        <div>
            <img src={logo} style={{ height: '50px', padding: '5px', paddingRight: '10px' }} />
        </div>
    )
}
