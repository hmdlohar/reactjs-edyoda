import { Button } from 'react-bootstrap';
import axios from 'axios';
import React, { Component } from 'react';
import { withRouter } from 'react-router';

class StudentList extends Component {
    state = {
        students: []
    }

    componentDidMount() {
        this.loadData()
    }

    loadData = () => {
        axios.get("http://localhost:1337/students")
            .then((response) => {
                this.setState({ students: response.data });
            })
            .catch((ex) => {
                alert("There was some error. Error: " + ex.message)
            })
    }

    onDeleteClick = (id) => {
        axios.delete(`http://localhost:1337/students/${id}`)
            .then((response) => {
                this.loadData()
            })
            .catch((ex) => {
                alert("There was some error. Error: " + ex.message)
            })
    }

    render() {
        return (
            <div>
                <Button
                    onClick={() => {
                        this.props.history.push("/student/add")
                    }}
                >Add Student</Button>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Subject</th>
                            <th>Gender</th>
                            <th>DOB</th>
                            <th>Is Active</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.students.map((student) => {
                            return (
                                <tr key={student.id}>
                                    <td>{student.name}</td>
                                    <td>{student.subject}</td>
                                    <td>{student.gender}</td>
                                    <td>{student.dob}</td>
                                    <td>{student.isActive ? "Yes" : "No"}</td>
                                    <td>
                                        <Button onClick={() => {
                                            this.props.history.push(`/student/edit/${student.id}`)
                                        }}>Edit</Button>{" "}
                                        <Button variant="danger"
                                            onClick={() => {
                                                this.onDeleteClick(student.id)
                                            }}
                                        >Delete</Button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default withRouter(StudentList);