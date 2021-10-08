import React from 'react'
import Logo from './Logo'
import Menu from './Menu'
import UserInfo from './UserInfo'
import classes from './Header.module.css'

export default function Header() {
    return (
        <div className={classes.container}>
            <div>
                <Logo />
            </div>
            <div style={{ flexGrow: 1 }}>
                <Menu></Menu>
            </div>
            <div>
                <UserInfo></UserInfo>
            </div>
        </div>
    )
}


