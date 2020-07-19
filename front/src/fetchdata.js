import axios from 'axios';

export const API = 'http://3.87.165.124:88/rest-countries-v1';

export const fetchData = async query => {
  const url = `${API}/?page=1&limit=10&country=${query}`;

  return await axios.get(url);
};

fetchData('ind');