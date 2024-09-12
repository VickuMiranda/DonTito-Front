'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getProductoId } from '../action'; 

const Detalle = () => {
    const router = useRouter();
    const { id } = router.query;
    const [producto, setProducto] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (id) {
            const fetchProducto = async () => {
                try {
                    const data = await getProductoId(id);
                    setProducto(data);
                } catch (err) {
                    setError('Error al obtener los detalles del producto.');
                } finally {
                    setLoading(false);
                }
            };

            fetchProducto();
        }
    }, [id]);

    if (loading) return <p>Cargando detalles...</p>;
    if (error) return <p>{error}</p>;
    if (!producto) return <p>Producto no encontrado.</p>;

    return (
        <div className="p-4 max-w-2xl mx-auto">
            <button
                onClick={() => router.back()}
                className="bg-black text-white py-2 px-4 rounded-full mb-4"
            >
                Volver
            </button>
            <div className="bg-white rounded-lg shadow-lg p-4">
                <img
                    src={`data:image/jpeg;base64,${producto.imagen}`}
                    alt={producto.nombre}
                    className="w-full h-80 object-cover rounded-md mb-4"
                />
                <h2 className="text-2xl font-bold mb-2">{producto.nombre}</h2>
                <p className="text-lg font-semibold mb-2">${producto.precio}</p>
                <p className="text-lg font-semibold mb-2">{producto.nombreModelo}</p>
                <p>{producto.descripcion}</p>
                <button
                    className="bg-black text-white py-2 px-4 rounded-full mt-4"
                >
                    Agregar al Carrito
                </button>
            </div>
        </div>
    );
};

export default Detalle;
