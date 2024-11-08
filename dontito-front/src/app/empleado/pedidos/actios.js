'use server';

import { getPedido } from "@/app/lib/api/pedido";
import { getPedidoDetalle } from "@/app/lib/api/pedidoDetalle";

export async function getPedidoList() {
    return await getPedido(); 
}

export async function getPedidoDetalleList(data) {
    return await getPedidoDetalle(data); 
}