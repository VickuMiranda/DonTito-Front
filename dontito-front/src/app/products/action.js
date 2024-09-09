'use server';

import { getProducto } from "@/app/lib/api/producto";

export async function getProductoList() {
    return await getProducto(); 
}