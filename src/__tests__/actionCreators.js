import { addToCart } from "../actionCreators";
import configureStore from 'redux-mock-store';

const mockStore = configureStore();

it('add to cart', () => {
  const store = mockStore({ cart: [] });

  const product = { id: 1, name: 'Product 1', price: 100, image: ''};
  store.dispatch(addToCart(product));

  const actions = store.getActions();
  expect(actions.length).toBe(1);
  expect(actions[0].type).toBe('ADD_TO_CART');
  expect(actions[0].product).not.toBeNull();
  expect(actions[0].product.id).toBe(1);
});