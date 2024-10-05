import axios from 'axios';

const API_URL = 'https://fakestoreapi.com/products';

export const fetchProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    console.log("RESPONSE DATA ----->",response.data);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch products');
  }
};
