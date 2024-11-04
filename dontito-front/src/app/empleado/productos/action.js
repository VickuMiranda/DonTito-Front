'use server';

import { getProducto, getProductoById, postProducto, putProducto, deleteProducto } from "@/app/lib/api/producto";
import { getModeloXNombre, getMarcaXModelo, postModelo } from "@/app/lib/api/modelo";
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

export async function crearProducto(formData) {
    return await postProducto(formData);
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

export async function crearModelo(data) {
    return await postModelo(data);
}

export async function getModeloNombre(data) {
    return await getModeloXNombre(data);
}