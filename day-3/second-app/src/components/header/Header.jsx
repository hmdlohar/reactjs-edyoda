import React from 'react'
import Logo from './Logo'
import Menu from './Menu'
import UserInfo from './UserInfo'
import classes from './Header.module.css'
import { connect } from 'react-redux'

function Header(props) {
    return (
        <div className={classes.container}>
            <div>
                <Logo />
            </div>
            <div style={{ flexGrow: 1 }}>
                <Menu></Menu>
            </div>
            <div>
                Selected: <b>{props.counter}</b>
            </div>
            {/* <div>
                <UserInfo></UserInfo>
            </div> */}
        </div>
    )
}

export default connect((state) => {
    return {
        counter: state
    }
})(Header)