import React from 'react'

export default function Card(props) {
    console.log(props, "card element")
    return (
        <div className="grid-item">
            <img src={props.imageURL} />
            <div>{props.title}, {props.place}</div>
        </div>
    )
}
