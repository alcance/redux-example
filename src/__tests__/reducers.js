import { products, cart } from '../reducers';

describe('products', () => {
  it('returns the initial state', () => {
    expect(products(undefined, {})).toEqual([]);
  });

  it('receives products', () => {
    const productList = [
      {id: 1, name: 'Product 1', price: 100, image: ''}
    ];

    expect(
      products([], { type: 'REPLACE_PRODUCTS', products: productList })
    ).toEqual(productList);

  });
});

describe('cart', () => {
  it('returns initial state', () => {
    expect(cart(undefined, {})).toEqual([]);
  });

  it ('adds product to cart', () => {
    const productList = [
      {id: 1, name: 'Product 1', price: 100, image: ''}
    ];

    expect(cart([], { type: 'ADD_TO_CART', cart: productList}))
  });
});