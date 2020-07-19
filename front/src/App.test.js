// src/App.test.js

import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import axios from "axios";
import { fetchData, API } from './fetchdata';

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

jest.mock('axios');
describe('fetchData', () => {
  it('fetches countries data from an API with limit of 10 on Page 1 with Search keyword - ind', async () => {
    const data = {
      headers: {
        Authorization: "dsds93432$#%^#$#Dfdfd$%@#@"
      }
    };
    axios.get.mockImplementationOnce(() => Promise.resolve(data));
    await expect(fetchData('ind')).resolves.toEqual(data);
    expect(axios.get).toHaveBeenCalledWith(
      `${API}/?page=1&limit=10&country=ind`,
    );
  });

  it('fetches erroneously countries data from an API', async () => {
    const errorMessage = 'Network Error';

    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage)),
    );
  });
});
