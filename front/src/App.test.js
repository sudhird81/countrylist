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

it('Toal count must be returned from the api', () => {
  //Limit dropdown field should be present
  expect(wrapper.find('input#totalcount')).toHaveLength(1);
});

// it('should handle the value of limit change', () => {
//    //Checking the selected value for limit
//   wrapper.find('#limit').simulate('change');
//    expect(wrapper.find('option').number());
// });