import React, { Component } from 'react'
import $ from 'jquery'

export default class ApiText extends Component {
    state = {
        data: null
    }


    // When this method is called. We can perform API calls. 
    componentDidMount() {
        $.get("https://reqres.in/api/users?page=2", (result) => {
            console.log(result.data, "data")
            this.setState({ data: result.data })
        })
        // fetch("https://reqres.in/api/users?page=2").then((res) => {
        //     res.json().then((data) => {
        //         console.log(data, "data")
        //     })
        // })
    }

    render() {
        console.log(this.state.data, "render")
        return (
            <div>
                {this.state.data && this.state.data.map(item => {
                    return (
                        <div key={item.email}>
                            {item.first_name} {item.lastName} {item.email}
                        </div>
                    )
                })}
            </div>
        )
    }
}

// ONLY IF --> &&
// If then else ? :
