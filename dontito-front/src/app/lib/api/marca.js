import axios from 'axios';

export async function getMarca() {
    try {
        const response = await axios.get(`https://localhost:7183/api/Marca/api/v1/marcas`, {
            httpsAgent: new (require('https')).Agent({ rejectUnauthorized: false })
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}