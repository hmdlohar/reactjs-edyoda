import React, { Component } from 'react'
import DetailModal from './DetailModal'

const sampleData = {
    "id": 7,
    "email": "michael.lawson@reqres.in",
    "first_name": "Michael",
    "last_name": "Lawson",
    "avatar": "https://reqres.in/img/faces/7-image.jpg"
}

function createCopies(count = 1000) {
    return [...Array(count)].map((item, index) => ({
        ...sampleData, id: index,
        email: `${index}-${sampleData.email}-${index}`
    }))
}

export default class LargeComponent extends Component {
    state = {
        list: createCopies(10000),
        showModal: false,
        currentRow: null
    }
    render() {
        return (
            <div>
                <table style={{ width: '100%' }} cellSpacing="0" border="1">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Email</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Avatar</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.list.map(row => {
                            return (
                                <tr key={row.id}>
                                    <td > {row.id}</td>
                                    <td > {row.email}</td>
                                    <td > {row.first_name}</td>
                                    <td > {row.last_name}</td>
                                    <td >
                                        <img src={row.avatar} style={{ height: 50, width: 50 }} />
                                    </td>
                                    <td >
                                        <button onClick={() => {
                                            this.setState({ showModal: true, currentRow: row })
                                        }} >View</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                {this.state.showModal &&
                    <DetailModal
                        // id={this.state.currentRow.id}
                        // email={this.state.currentRow.email}
                        // first_name={this.state.currentRow.first_name}
                        // last_name={this.state.currentRow.last_name}
                        // avatar={this.state.currentRow.avatar}

                        {...this.state.currentRow}
                        closeMe={() => {
                            this.setState({ showModal: false })
                        }}
                    />}

            </div>
        )
    }
}
