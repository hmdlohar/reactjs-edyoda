import React, { Component, PureComponent } from 'react'

export default class TableList extends PureComponent {

    shouldComponentUpdate() {
        return false;
    }

    render() {
        console.log("this is big render. ")
        return (
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
                    {this.props.list.map(row => {
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
                                        // this.setState({ showModal: true, currentRow: row })
                                        this.props.onViewButtonClicked(row)
                                    }} >View</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    }
}