import { Button } from 'react-bootstrap';
import axios from 'axios';
import React, { Component } from 'react';
import { withRouter } from 'react-router';
import $ from 'jquery'

class StudentList extends Component {
    state = {
        students: []
    }

    componentDidMount() {
        this.loadData()
    }

    // loadData = () => {
    //     axios.get("http://localhost:1337/students")
    //         .then((response) => {
    //             this.setState({ students: response.data });
    //         })
    //         .catch((ex) => {
    //             alert("There was some error. Error: " + ex.message)
    //         })
    // }

    // Make your own problems. Then you will solve it. 

    getPromised = (url) => {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: url,
                success: resolve,
                error: reject
            })
        });
    }

    loadData = async () => {
        try {
            const data = await this.getPromised("http://localhost:1337/students")
            console.log("data", data)
            this.setState({ students: data })
        }
        catch (err) {
            console.log("err", err)
        }
    }

    loadData4 = async () => {
        $.get("http://localhost:1337/students", (data) => {
            console.log("firstStudent", data)
            for (var student of data) {
                console.log("student", student)
                $.get(`http://localhost:1337/marks?studentID=${student.id}`, (marksData) => {
                    student.marks = marksData;
                    console.log("Marks inside callback", student)
                })
            }
            console.log("afterloop complete", data.marks)
        })
    }

    loadData88 = async () => {
        try {
            const response = await axios.get("http://localhost:1337/students")
            for (var student of response.data) {
                const res = await axios.get(`http://localhost:1337/marks?studentID=${student.id}`)
                student.marks = res.data;
                console.log(student)
            }
            console.log("Loop is finished. ", response.data)
        }
        catch (ex) {
            alert("Error: " + ex.message)
        }
    }

    loadData55 = () => {
        axios.get("http://localhost:1337/students/1")
            .then((response) => {
                const student = response.data;
                console.log(student)
                axios.put("http://localhost:1337/students/1", { ...student, gender: "Male" })
                    .then((response) => {
                        console.log("Update is succes. ")
                        axios.get("http://localhost:1337/students/1")
                            .then((response) => {
                                console.log("Final student", response.data)
                            })
                    })
                    .catch((ex) => {
                        alert("There was while updating. Error: " + ex.message)
                    })
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