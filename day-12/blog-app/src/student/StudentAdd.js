import { Button } from 'react-bootstrap'
import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router'

class StudentAdd extends Component {
    state = {
        name: '',
        subject: '',
        gender: 'Male',
        dob: '',
        isActive: false
    }

    onButtonClick() {
        console.log(this.state)
        axios.post("http://localhost:1337/students", {
            name: this.state.name,
            subject: this.state.subject,
            gender: this.state.gender,
            dob: this.state.dob,
            isActive: this.state.isActive
        })
            .then((response) => {
                console.log(response.data)
                this.props.history.goBack()
            })
            .catch((ex) => {
                alert("There was some error. Error: " + ex.message)
            })
    }

    render() {
        // console.log('state: ', this.state)
        return (
            <div>
                <h4>Add Student </h4>
                <table className="table">
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>
                                <input
                                    type="text"
                                    placeholder="Enter Name"
                                    onChange={(event) => {
                                        this.setState({ name: event.target.value })
                                    }}
                                /></td>
                        </tr>
                        <tr>
                            <td>Subject</td>
                            <td><input
                                onChange={(event) => {
                                    this.setState({ subject: event.target.value })
                                }}
                                type="text" placeholder="Enter Subject" /></td>
                        </tr>
                        <tr>
                            <td>Date Of Birth</td>
                            <td><input
                                onChange={(event) => {
                                    this.setState({ dob: event.target.value })
                                }}
                                type="date" placeholder="Enter DOB" /></td>
                        </tr>
                        <tr>
                            <td>Gender</td>
                            <td>
                                <select
                                    onChange={(event) => {
                                        this.setState({ gender: event.target.value })
                                    }}
                                >
                                    <option valu="Male">Male</option>
                                    <option valu="Female">Female</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Is Active</td>
                            <td>
                                <input
                                    onChange={(event) => {
                                        this.setState({ isActive: event.target.checked })
                                    }}
                                    type="checkbox" /> isActive
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <Button onClick={this.onButtonClick.bind(this)} >Save</Button>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        )
    }
}

export default withRouter(StudentAdd)