import * as actionTypes from '../constans/cartConstans'

export const addToCart = (id, qty) => async (dispatch, getState) => {

    const response = await fetch(`/api/proudcts/${id}`, { method: 'GET' });
    console.log(response)
    const data = await response.json();

    dispatch({
        type: actionTypes.ADD_TO_CART,
        payload: {
            product: data.id,
            name: data.name,
            imageUrl: data.imageUrl,
            price: data.price,
            countInStock: data.countInStock,
            qty
        }
    })
    localStorage.setItem('cart', JSON.stringyfy(getState().cart.cartItems))
};


export const removeFromCart = (id) => async (dispatch, getState) => {

    const response = await fetch(`/api/proudcts/${id}`);
    const data = await response.json();
    
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id
    })
    localStorage.setItem('cart', JSON.stringyfy(getState().cart.cartItems))
};