const initialState = {
    lstProduct: [],
    isAddingProduct: false
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT': return {
            ...state,
            lstProduct: [...state.lstProduct, action.payload],
            isAddingProduct: false
        }
        case 'REMOVE_PRODUCT': return {
            ...state,
            lstProduct: state.lstProduct.filter(item => item.id !== action.payload)
        }
        case 'OPEN_ADD_FORM': return { ...state, isAddingProduct: true }
        default: return state
    }
}

export default productReducer;