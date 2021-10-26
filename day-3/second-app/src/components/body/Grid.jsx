import React from 'react'
import { connect } from 'react-redux'
import Card from './Card'

function Grid(props) {
    console.log(props)
    return (
        <div className="grid-container">
            {props.places.map((obj, index) => {
                return (
                    <Card
                        key={index}
                        imageURL={obj.imageURL}
                        title={obj.title}
                        place={obj.place}
                        id={obj.id}
                        selectedPlaces={props.selectedPlaces}
                        onSelect={() => {
                            props.increment()
                            // props.onSelect(obj)
                        }}
                    />
                )
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        counter: state
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch({ type: "INCREMENT" })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Grid)