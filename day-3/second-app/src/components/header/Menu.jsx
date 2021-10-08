import React from 'react'
import classes from './Header.module.css'

export default function Menu() {
    return (
        <ul className={classes.menu}>
            <li>Home</li>
            <li>Page1</li>
            <li>Page2</li>
        </ul>
    )
}
