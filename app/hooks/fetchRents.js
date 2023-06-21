const axios = require('axios');

export const fetchRents = async () => {
  const options = {
    method: 'GET',
    url: 'https://bayut.p.rapidapi.com/properties/list',
    params: {
      locationExternalIDs: '5002,6020',
      purpose: 'for-rent',
      hitsPerPage: '6'
    },
    headers: {
      'X-RapidAPI-Key': 'dd49078e6cmsh9cfaa89e538c125p18766djsnef330d9f1853',
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    }
  };
  
  try {
    const response = await axios.request(options);
    return response.data
  } catch (error) {
    console.error(error);
  }
}
