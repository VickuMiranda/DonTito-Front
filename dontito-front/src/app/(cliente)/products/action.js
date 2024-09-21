'use server';

import { getProducto } from "@/app/lib/api/producto";
import { getProductoById } from "@/app/lib/api/producto";
import { getMarcaXModelo } from "@/app/lib/api/modelo";

export async function getProductoList() {
    return await getProducto(); 
}

export async function getProductoId(data) {
    return await getProductoById(data);
}

export async function getNombreMarca(data) {
    return await getMarcaXModelo(data);
}