import React from 'react'

export default function Card(props) {
    console.log(props.selectedPlaces, "card element")
    return (
        <div className="grid-item">
            <img src={props.imageURL} />
            <div>{props.title}, {props.place}</div>
            {props.selectedPlaces.find(item => item.id === props.id) ?
                <button onClick={() => {
                    // props.onSelect()
                }}>Remove</button>
                :
                <button onClick={() => {
                    props.onSelect()
                }}>Select</button>
            }
        </div>
    )
}
