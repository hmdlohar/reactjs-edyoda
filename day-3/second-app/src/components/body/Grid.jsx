import React from 'react'
import Card from './Card'

export default function Grid(props) {
    return (
        <div className="grid-container">
            {props.places.map((obj, index) => {
                return (
                    <Card
                        key={index}
                        imageURL={obj.imageURL}
                        title={obj.title}
                        place={obj.place}
                    />
                )
            })}
        </div>
    )
}
