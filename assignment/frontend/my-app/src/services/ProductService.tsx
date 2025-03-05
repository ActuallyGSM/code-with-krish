import axios from "axios";

export const FetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3001/products');
      return response.data;
    } catch (error) {
      console.error('Error fetching products', error);
    }
  };