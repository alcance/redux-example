import axios from 'axios';

const loadProducts = () => {
  return dispatch => {
    return axios.get('http://localhost:3002/prodcuts').then(response => {
      dispatch({
        type: 'REPLACE_PRODUCTS',
        products: response.data
      })
    })
  }
}

const addToCart = product => {
  return {
    type: 'ADD_TO_CART',
    product
  }
};

const removeFromCart = product => {
  return {
    type: 'REMOVE_CART_ITEM',
    product
  }
};

export { loadProducts, addToCart, removeFromCart };