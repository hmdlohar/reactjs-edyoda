import React, { Component } from 'react'
import { connect } from 'react-redux'

class Product extends Component {
    state = {
        title: '',
        price: ''
    }
    render() {
        return (
            <div>
                <button
                    onClick={() => {
                        this.props.openAddForm()
                    }}
                >Add New Product</button>
                {this.props.product.isAddingProduct &&
                    <div style={{ border: '1px solid grey', padding: 10 }}>
                        New Product Form
                        <br />
                        <input
                            type="text"
                            placeholder="Title"
                            value={this.state.title}
                            onChange={(e) => this.setState({ title: e.target.value })}
                        />
                        <input
                            type="text"
                            placeholder="Price"
                            value={this.state.price}
                            onChange={(e) => this.setState({ price: e.target.value })}
                        />
                        <button
                            onClick={() => {
                                if (!this.state.price || !this.state.title) {
                                    alert("Please Fill the form");
                                    return
                                }
                                this.props.addProduct({
                                    title: this.state.title,
                                    price: this.state.price,
                                    id: Date.now()
                                })
                            }}
                        >Add</button>
                    </div>
                }
                <table border="1">
                    <caption>Product List</caption>
                    <tbody>
                        {this.props.product.lstProduct.map((objProduct, index) => {
                            return (
                                <tr key={index}>
                                    <td>{objProduct.title}</td>
                                    <td>{objProduct.price}</td>
                                    <td>
                                        <button
                                            onClick={() => {
                                                this.props.deleteProduct(objProduct.id)
                                            }}
                                        >Delete</button>
                                    </td>
                                    <td>
                                        {this.props.cart.find((item) => item.id === objProduct.id) ?
                                            <button
                                                onClick={() => {
                                                    this.props.removeFromCart(objProduct.id)
                                                }}
                                            >Remove From Cart</button>
                                            :
                                            <button
                                                onClick={() => {
                                                    this.props.addToCart(objProduct)
                                                }}
                                            >Add To Cart</button>
                                        }

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
        product: state.product,
        cart: state.cart
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        openAddForm: () => dispatch({ type: "OPEN_ADD_FORM" }),
        addProduct: (objProduct) => dispatch({ type: "ADD_PRODUCT", payload: objProduct }),
        deleteProduct: (id) => dispatch({ type: "REMOVE_PRODUCT", payload: id }),
        addToCart: (objProduct) => dispatch({ type: "ADD_TO_CART", payload: objProduct }),
        removeFromCart: (id) => dispatch({ type: "REMOVE_FROM_CART", payload: id }),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Product)