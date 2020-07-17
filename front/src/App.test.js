// src/App.test.js

import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

const wrapper = shallow(<App />);
it('should have input for Search', () => {
  //Search input field should be present
  expect(wrapper.find('input#search')).toHaveLength(1);
});

it('should have dropdown for limit', () => {
  //Limit dropdown field should be present
  expect(wrapper.find('select#limit')).toHaveLength(1);
});