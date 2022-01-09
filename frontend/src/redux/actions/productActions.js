import * as actionTypes from "../constans/productConstans";

export const getProducts = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_PRODUCTS_REQUEST });
    
    const response = await fetch("/api/products", { method: 'GET' });
    console.log(response)
    const data = await response.json();
    
     dispatch({
      type: actionTypes.GET_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getProductDetails = (id) => async (dispatch) => {
    try {
      dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST });
  
      const response = await fetch(`/api/products/${id}`, { method: 'GET' });
      
      const data = await response.json();
  
      dispatch({
        type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.GET_PRODUCTS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  export const removeProductDetails = () => (dispatch) => {
    dispatch({
        type: actionTypes.GET_PRODUCT_DETAILS_RESET
    })
  }
  
