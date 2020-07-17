// src/App.test.js

import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

/*it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('Addition', () => {
  it('knows that 2 and 2 make 4', () => {
    expect(2 + 2).toBe(4);
  });
}); */
const wrapper = shallow(<App />);
it('should have input for Search', () => {
  //Search input field should be present
  expect(wrapper.find('input#search')).toHaveLength(1);
});

it('should have dropdown for limit', () => {
  //Limit dropdown field should be present
  expect(wrapper.find('select#limit')).toHaveLength(1);
});