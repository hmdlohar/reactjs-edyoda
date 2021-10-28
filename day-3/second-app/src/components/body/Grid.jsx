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
                        onRemove={() => {
                            props.removeFromCart(obj.id)
                        }}
                        selectedPlaces={props.lstCart}
                        onSelect={() => {
                            props.addToCart(obj)
                        }}
                    />
                )
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        lstCart: state
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (objPlace) => dispatch({ type: "ADD_TO_CART", payload: objPlace }),
        removeFromCart: (id) => dispatch({ type: "REMOVE_FROM_CART", payload: id }),
    }
}
//withRoute(Grid) // history, match, location
export default connect(mapStateToProps, mapDispatchToProps)(Grid)