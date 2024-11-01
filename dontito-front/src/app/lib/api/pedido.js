import axios from 'axios';

export async function postPedido(total) {
    try {
        const response = await axios.post('https://localhost:7183/api/Pedido/api/v1/agregar/pedido', {
            total  
        }, {
            httpsAgent: new (require('https')).Agent({ rejectUnauthorized: false })
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching pedido:', error);
        throw error;
    }
}

export async function getPedido() {
    try {
        const response = await axios.get('https://localhost:7183/api/Pedido/api/v1/pedidos', {
            httpsAgent: new (require('https')).Agent({ rejectUnauthorized: false })
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching pedidos:', error);
        throw error;
    }
}
