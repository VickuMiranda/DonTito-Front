import axios from 'axios';

export async function postPedido() {
    try {
        const response = await axios.post('https://localhost:7183/api/Pedido/api/v1/agregar/pedido', {
            httpsAgent: new (require('https')).Agent({ rejectUnauthorized: false })
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching pedido:', error);
        throw error;
    }
}