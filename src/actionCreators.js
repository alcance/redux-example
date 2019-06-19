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

export { addToCart, removeFromCart };