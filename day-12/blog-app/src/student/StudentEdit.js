import { Button } from 'react-bootstrap'
import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router'

class StudentEdit extends Component {
    state = {
        name: '',
        subject: '',
        gender: 'Male',
        dob: '',
        isActive: false
    }

    componentDidMount() {
        axios.get(`http://localhost:1337/students/${this.props.match.params.id}`)
            .then((response) => {
                this.setState({
                    name: response.data.name,
                    subject: response.data.subject,
                    gender: response.data.gender,
                    dob: response.data.dob,
                    isActive: response.data.isActive,
                })
            })
            .catch((ex) => {
                alert("There was some error. Error: " + ex.message)
            })
    }

    onButtonClick() {
        console.log(this.state)
        axios.put(`http://localhost:1337/students/${this.props.match.params.id}`, {
           ...this.state
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
                <h4>Edit Student </h4>
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
                                    value={this.state.name}
                                /></td>
                        </tr>
                        <tr>
                            <td>Subject</td>
                            <td><input
                                onChange={(event) => {
                                    this.setState({ subject: event.target.value })
                                }}
                                value={this.state.subject}
                                type="text" placeholder="Enter Subject" /></td>
                        </tr>
                        <tr>
                            <td>Date Of Birth</td>
                            <td><input
                                onChange={(event) => {
                                    this.setState({ dob: event.target.value })
                                }}
                                value={this.state.dob}
                                type="date" placeholder="Enter DOB" /></td>
                        </tr>
                        <tr>
                            <td>Gender</td>
                            <td>
                                <select
                                    onChange={(event) => {
                                        this.setState({ gender: event.target.value })
                                    }}
                                    value={this.state.gender}
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
                                    checked={this.state.isActive || false}
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

export default withRouter(StudentEdit)