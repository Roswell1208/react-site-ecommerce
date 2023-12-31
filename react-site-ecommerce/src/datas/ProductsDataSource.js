import axios from 'axios';

export const fetchProductsData = async () => {
    try {
        const response = await axios.get('http://localhost:8000/api/products');
        return response.data;
    } catch (error) {
        console.error('Error fetching data from API: ', error);
        throw error;
    }
};