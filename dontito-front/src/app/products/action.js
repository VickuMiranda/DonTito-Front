'use server';

import { getProducto } from "@/app/lib/api/producto";
import { getProductoById } from "@/app/lib/api/producto";

export async function getProductoList() {
    return await getProducto(); 
}

export async function getProductoId(data) {
    return await getProductoById(data);
}