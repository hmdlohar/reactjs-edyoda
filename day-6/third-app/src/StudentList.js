import React, { Component } from 'react'

export default class StudentList extends Component {
    state = {
        students: ["Hamid", "Lohar", "Prashant"],
        name: ''
    }

    onStudentAdd = () => {
        console.log("i need to add one element in this.state.students", this.state.name)
        this.setState({ students: [...this.state.students, this.state.name] })
        this.setState({ name: '' })
    }

    // <select>, checkbox, radio, textarea
    render() {
        console.log(this.state.name, "Vlaue of name")
        return (
            <div>
                <input
                    type="text"
                    value={this.state.name}
                    onChange={(event) => {
                        this.setState({ name: event.target.value })
                    }}
                />
                <button onClick={this.onStudentAdd}>Add New Student</button>
                <ul>
                    {this.state.students.map(student => {
                        return (
                            <li key={student}>{student}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

// Function component is stateless
// Class component is stateful

