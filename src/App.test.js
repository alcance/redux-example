import React from 'react';
import App from './App';
import Adapter from 'enzyme-adapter-react-15';
import { shallow, configure } from 'enzyme';

configure({
  adapter: new Adapter()
});

it('renders without crashing', () => {
  shallow(<App />);
});
