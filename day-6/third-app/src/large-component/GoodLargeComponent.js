import React, { Component } from 'react'
import DetailModal from './DetailModal'
import TableList from './TableList'

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


export default class GoodLargeComponent extends Component {
    state = {
        list: createCopies(10000),
        showModal: false,
        currentRow: null
    }
    render() {
        return (
            <div>
                <TableList
                    list={this.state.list}
                    onViewButtonClicked={(row) => {
                        this.setState({ showModal: true, currentRow: row })
                    }}
                />
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
