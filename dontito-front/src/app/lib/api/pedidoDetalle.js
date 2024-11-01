import axios from 'axios';

export async function postPedidoDetalle(idProducto, cantidad, subTotal, idPedido) {
    try {
        const response = await axios.post('https://localhost:7183/api/PedidoDetalle/api/v1/agregar/pedidoDetalle', {
            idProducto,
            cantidad,
            subTotal,
            idPedido
        }, {
            httpsAgent: new (require('https')).Agent({ rejectUnauthorized: false })
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching pedido:', error);
        throw error;
    }
}

export async function getPedidoDetalle() {
    try {
        const response = await axios.get(`https://localhost:7183/api/PedidoDetalle/api/v1/pedidoDetalle/buscarPedido/${pedido}`, {
            httpsAgent: new (require('https')).Agent({ rejectUnauthorized: false })
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching pedidos:', error);
        throw error;
    }
}
