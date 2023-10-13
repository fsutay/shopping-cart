import axios, { AxiosResponse } from 'axios';
const API_URL = "https://dummyjson.com"

export const getProduct = async () => {
   const response: AxiosResponse = await axios.get(`${API_URL}/products`);

  return response.data;

}