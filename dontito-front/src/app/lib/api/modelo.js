import axios from 'axios';



export async function getMarca(nombre) {
    try {
        const response = await axios.get(`https://localhost:7183/api/Modelo/api/v1/modelo/nombre/${nombre}`, {
            httpsAgent: new (require('https')).Agent({ rejectUnauthorized: false })
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}