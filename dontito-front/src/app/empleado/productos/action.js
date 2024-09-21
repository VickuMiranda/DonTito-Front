'use server';

import { getProducto } from "@/app/lib/api/producto";
import { getProductoById } from "@/app/lib/api/producto";
import { getMarcaXModelo } from "@/app/lib/api/modelo";
import { postProducto } from "@/app/lib/api/producto";
import { putProducto } from "@/app/lib/api/producto";
import { deleteProducto } from "@/app/lib/api/producto";
import { getMarca } from "@/app/lib/api/marca"; 

export async function getProductoList() {
    return await getProducto(); 
}

export async function getProductoId(data) {
    return await getProductoById(data);
}

export async function getNombreMarca(data) {
    return await getMarcaXModelo(data);
}

export async function CrearProducto(data) {
    return await postProducto(data);
}

export async function EditarProducto(id, producto) {
    return await putProducto(id, producto);
}

export async function EliminarProducto(id) {
    return await deleteProducto(id);
}

export async function getMarcas() {
    return await getMarca();
}