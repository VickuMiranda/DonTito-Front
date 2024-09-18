import axios from 'axios';

export async function postPedidoDetalle(cantidad, productoId, idPedido, subtotal) {
    try {
        const response = await axios.post('https://localhost:7183/api/PedidoDetalle/api/v1/agregar/pedidoDetalle', {
            cantidad,
            productoId,
            idPedido,
            subtotal
        }, {
            httpsAgent: new (require('https')).Agent({ rejectUnauthorized: false })
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching pedido:', error);
        throw error;
    }
}
