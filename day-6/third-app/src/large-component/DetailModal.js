import React, { Component } from 'react'
import classes from './style.module.css'

export default class DetailModal extends Component {
    render() {
        const { id, email, first_name, last_name, avatar } = this.props;
        return (
            <div className={classes.modalContainer}>
                <div className={classes.modalMain}>
                    ModalTitle
                    <div
                        className={classes.closeButton}
                        onClick={() => {
                            this.props.closeMe()
                        }}
                    >
                        X
                    </div>
                    <hr />

                    <ul>
                        <li> ID: <b>{id}</b></li>
                        <li> Email: <b>{email}</b></li>
                        <li> Name: <b>{first_name}</b></li>
                        <li> Image:  <img src={avatar} style={{ height: 150, width: 150 }} /></li>
                    </ul>
                </div>
            </div>
        )
    }
}
