import React, { Component } from 'react'
import { connect } from 'react-redux'

class Cart extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <table border="1">
                    <caption>Product List</caption>
                    <tbody>
                        {this.props.cart.map((objProduct, index) => {
                            return (
                                <tr key={index}>
                                    <td>{objProduct.title}</td>
                                    <td>{objProduct.price}</td>
                                    <td>
                                        <button
                                            onClick={() => {
                                                this.props.removeFromCart(objProduct.id)
                                            }}
                                        >Remove</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        removeFromCart: (id) => dispatch({ type: "REMOVE_FROM_CART", payload: id })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)