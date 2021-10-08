import React from 'react'
import classes from './Header.module.css'


export default function UserInfo() {
    return (
        <div>
            <span className={classes.userTitle}>hamid Lohar</span>
            <img
                src="https://cdn1.vectorstock.com/i/1000x1000/38/05/male-face-avatar-logo-template-pictograph-vector-11333805.jpg"
                style={{ height: '50px', borderRadius: '100%' }}
            />
        </div>
    )

}
